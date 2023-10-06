import { useEffect, useState } from 'react'
import { oneCall } from '../../apis/oneCall'
import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'

const WeatherCard = ()=> {
  const [loading,setLoading] = useState(true)
  const [currentCityWeather,setCurrentCityWeather] = useState()
  const [forecast,setForecast] = useState()
  const [currentCity,setCurrentCity] = useState('Sydney')

  useEffect(()=>{
    oneCall(currentCity)
    .then((response)=> response.data)
    .then((data)=>{
      setCurrentCityWeather(data)
      setForecast(data.daily)
    })
    .finally(()=> {
      setLoading(false)
    })
  },[currentCity])

  const onClick = (currentCity)=> {
    setCurrentCity(currentCity)
  }
  
  return (
    <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden'>
      <CurrentCity loading={loading} currentCityWeather={currentCityWeather} currentCity={currentCity}/>
      <div className="flex px-12 py-9">
        <OtherCities onClick={onClick} currentCity={currentCity}/>
        <div className="w-[3px] bg-black/20"></div>
        <Forecast loading={loading} forecast={forecast} />
      </div>
    </div>
  )
}

export default WeatherCard