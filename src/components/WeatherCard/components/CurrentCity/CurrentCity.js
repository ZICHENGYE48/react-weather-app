import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../../../apis/getCurrentWeather'
import BackgroundImage from '../../../BackgroundImage'
import bg from './assets/image.jpeg'
import Meta from './components/Meta'
import Name from './components/Name'
import Temperature from './components/Temperature'
import Weather from './components/Weather'

const CurrentCity = () => {
  const [loading,setLoading] = useState(true)
  const [weather,setWeather] = useState()

  const DEFAULT_CITY = {
    lat: -33.8698439,
    lon: 151.2082848
  }

  useEffect(()=>{
    getCurrentWeather(DEFAULT_CITY.lat, DEFAULT_CITY.lon)
    .then((response)=> response.data)
    .then((data)=>{
      setWeather(data)
    })
    .finally(()=> setLoading(false))
  },[])

  return (
    <BackgroundImage image={bg}>
      <div className="flex gap-48 py-16 px-24 justify-between">
        <div>
          <Temperature className='text-white text-7xl text-center' value={parseInt(weather?.current.temp)} loading={loading}/>
          <Weather value={weather?.current.weather[0].main} loading={loading}/>
          <div className="flex gap-8 mt-6">
            <Meta title="HUMIDITY" loading={loading}>{`${weather?.current.humidity}%`}</Meta>
            <div className="w-[1px] bg-white/70"></div>
            <Meta title="WIND" loading={loading}>{`${parseInt(weather?.current.wind_speed)} KM/H`}</Meta>
          </div>
        </div>
        <Name>Sydney</Name>
      </div>
      <div className="h-[25px] bg-black/60 absolute bottom-0 inset-x-0"/>
    </BackgroundImage>
  )
}

export default CurrentCity