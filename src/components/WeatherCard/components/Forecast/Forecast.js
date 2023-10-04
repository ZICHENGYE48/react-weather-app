import DayOfWeek from "./components/DayOfWeek"

const Forecast = () => {
  const FORECAST_MAPPING = [
    {
      day: 'Mon',
      code: '04n',
      weather: "Sunny",
      temperature: 20
    },
    {
      day: 'Tue',
      code: '04n',
      weather: "Sunny",
      temperature: 20
    },
    {
      day: 'Wed',
      code: '04n',
      weather: "Sunny",
      temperature: 20
    },
    {
      day: 'Thu',
      code: '04n',
      weather: "Sunny",
      temperature: 20
    },
    {
      day: 'Fri',
      code: '04n',
      weather: "Sunny",
      temperature: 20
    }
  ]
  return (
    <div className="text-2xl tracking-widest ml-12">
      <div className="mb-8">
        <h3 className="text-2xl">Forecast</h3>
      </div>
      <div className="flex gap-8">
        {
          FORECAST_MAPPING.map(({day, weather, code, temperature})=> (
            <DayOfWeek day={day} weather={weather} code={code} temperature={temperature}/>
          ))
        }
      </div>
    </div>
  )
}

export default Forecast