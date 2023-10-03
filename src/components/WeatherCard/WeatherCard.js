import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'

const WeatherCard = ()=> (
  <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden'>
    <CurrentCity />
    <div className="flex px-12 py-9">
      <OtherCities />
      <div className="w-[3px] bg-black/20"></div>
      <Forecast />
    </div>
  </div>
)

export default WeatherCard