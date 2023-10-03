import BackgroundImage from '../../../BackgroundImage'
import bg from './assets/image.jpeg'
import Humidity from './components/Humidity'
import Temperature from './components/Temperature'
import Weather from './components/Weather'
import Wind from './components/Wind'

const CurrentCity = () => (
  <BackgroundImage image={bg}>
    <Temperature />
    <Weather />
    <Humidity />
    <Wind />
  </BackgroundImage>
)

export default CurrentCity