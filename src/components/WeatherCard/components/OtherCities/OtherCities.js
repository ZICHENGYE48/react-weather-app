import City from "./components/City"

const OtherCities = ()=> {
  const CITIES_MAPPING = [
    {
      name: 'Sydney',
      temperature: 12,
      weather: 'rain'
    },
    {
      name: 'Melbourne',
      temperature: 13,
      weather: 'Sunny'
    },
    {
      name: 'Darwin',
      temperature: 15,
      weather: 'rain'
    },
    {
      name: 'Perth',
      temperature: 16,
      weather: 'rain'
    }
  ]
  return (
    <div className="mr-12">
      <div className="text-2xl tracking-widest mb-8">Other Cities</div>
      {
        CITIES_MAPPING.map(({ name, temperature, weather })=> (
          <City
            key={name}
            name={name}
            temperature={temperature}
            weather={weather}
          />
        ))
      }
    </div>
  )
}

export default OtherCities