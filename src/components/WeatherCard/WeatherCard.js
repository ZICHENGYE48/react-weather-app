import { useEffect, useState } from 'react'
import { oneCall } from '../../apis/oneCall'
import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'

const WeatherCard = ()=> {

  const [loading,setLoading] = useState(true)
  const [current,setCurrent] = useState()
  const [forecast,setForecast] = useState()

  useEffect(()=>{
    oneCall()
    .then((response)=> response.data)
    .then((data)=>{
      setCurrent(data)
      setForecast(data.daily)
    })
    .finally(()=> {
      setLoading(false)
    })
  },[])
  
  return (
    <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden'>
      <CurrentCity loading={loading} current={current} />
      <div className="flex px-12 py-9">
        <OtherCities />
        <div className="w-[3px] bg-black/20"></div>
        <Forecast loading={loading} forecast={forecast} />
      </div>
    </div>
  )
}

export default WeatherCard