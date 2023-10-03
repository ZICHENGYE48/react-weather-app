import DayOfWeek from "./components/DayOfWeek"

const Forecast = () => {
  const FORECAST_MAPPING = [
    {
      day: 'Mon',
      weather: "Sunny"
    },
    {
      day: 'Tue',
      weather: "Sunny"
    },
    {
      day: 'Wed',
      weather: "Sunny"
    },
    {
      day: 'Thu',
      weather: "Sunny"
    },
    {
      day: 'Fri',
      weather: "Sunny"
    }
  ]
  return (
    <div className="text-2xl tracking-widest ml-12">
      {
        FORECAST_MAPPING.map(({day, weather})=> (
          <DayOfWeek day={day} weather={weather} />
        ))
      }
    </div>
  )
}

export default Forecast