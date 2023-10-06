import WeatherIcon from '../../../../../WeatherIcon'
import Temperature from '../../../CurrentCity/components/Temperature'
import Name from "./components/Name"

const City = ({
  name,
  temperature,
  weather,
  code,
  onClick
}) => (
  <div className="mb-4 flex justify-between items-center cursor-pointer">
    <Name onClick={onClick}>{name}</Name>
    <Temperature className="text-xl" value={temperature} />
    <WeatherIcon className="ml-8" weather={weather} code={code}/>
  </div>
)

export default City