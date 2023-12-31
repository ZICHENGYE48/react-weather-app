import BackgroundImage from '../../../BackgroundImage'
import bg from './assets/image.jpeg'
import Meta from './components/Meta'
import Name from './components/Name'
import Temperature from './components/Temperature'
import Weather from './components/Weather'

const CurrentCity = ({
  loading,
  currentCityWeather,
  currentCity
}) => (
  <BackgroundImage image={bg}>
    <div className="flex gap-48 py-16 px-24 justify-between">
      <div>
        <Temperature className='text-white text-7xl text-center' value={parseInt(currentCityWeather?.current.temp)} loading={loading}/>
        <Weather value={currentCityWeather?.current.weather[0].main} loading={loading}/>
        <div className="flex gap-8 mt-6">
          <Meta title="HUMIDITY" loading={loading}>{`${currentCityWeather?.current.humidity}%`}</Meta>
          <div className="w-[1px] bg-white/70"></div>
          <Meta title="WIND" loading={loading}>{`${parseInt(currentCityWeather?.current.wind_speed)} KM/H`}</Meta>
        </div>
      </div>
      <Name>{currentCity}</Name>
    </div>
    <div className="h-[25px] bg-black/60 absolute bottom-0 inset-x-0"/>
  </BackgroundImage>
)

export default CurrentCity