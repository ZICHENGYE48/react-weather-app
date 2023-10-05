import DayOfWeek from "./components/DayOfWeek"

const Forecast = ({
  loading,
  forecast
}) => {

  const forecastMapping = forecast?.slice(1,6).map(({ dt,weather, temp })=> ({
    day: new Date(dt * 1000).toLocaleString('en-US', { weekday: 'short' }), 
    code: weather[0].icon, 
    weather: weather[0].main, 
    temperature: parseInt(temp.day)
  }))

  return (
    <div className="text-2xl tracking-widest ml-12 min-w-[400px]">
      <div className="mb-8">
        <h3 className="text-2xl">Forecast</h3>
      </div>
      {
        loading ? <div>Loading...</div> : (
          <div className="flex gap-8">
            {
              forecastMapping?.map(({day, weather, code, temperature})=> (
                <DayOfWeek key={day} day={day} weather={weather} code={code} temperature={temperature}/>
              ))
            }
          </div>
        )
      }

    </div>
  )
}

export default Forecast