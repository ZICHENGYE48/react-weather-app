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
    <div>
      {
        CITIES_MAPPING.map(({ name, temperature, weather })=> (
          <div key={name}>
            {name}
            {temperature}
            {weather}
          </div>
        ))
      }
    </div>
  )
}

export default OtherCities