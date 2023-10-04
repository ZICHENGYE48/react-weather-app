import BackgroundImage from '../../../BackgroundImage'
import bg from './assets/image.jpeg'
import Meta from './components/Meta'
import Name from './components/Name'
import Temperature from './components/Temperature'
import Weather from './components/Weather'

const CurrentCity = () => (
  <BackgroundImage image={bg}>
    <div className="flex gap-48 py-16 px-24 justify-between">
      <div>
        <Temperature className='text-white text-7xl text-center' value={19} />

        <Weather value={'Cloudy'} />
        <div className="flex gap-8 mt-6">
          <Meta title="HUMIDITY">72%</Meta>
          <div className="w-[1px] bg-white/70"></div>
          <Meta title="WIND">5KM/H</Meta>
        </div>
      </div>
      <Name>Sydney</Name>
    </div>
    <div className="h-[25px] bg-black/60 absolute bottom-0 inset-x-0"/>
  </BackgroundImage>
)

export default CurrentCity