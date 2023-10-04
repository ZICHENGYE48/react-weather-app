import WeatherIcon from "../../../../../WeatherIcon"
import Temperature from "../../../CurrentCity/components/Temperature"

const DayOfWeek = ({
  day,
  code,
  weather,
  temperature
})=> (
  <div>
    <div>{day}</div>
    <div className="my-4">
      <WeatherIcon code={code} weather={weather}></WeatherIcon>
    </div>
    <Temperature value={temperature} />
  </div>
)

export default DayOfWeek