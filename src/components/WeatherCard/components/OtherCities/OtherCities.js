import City from "./components/City"

const OtherCities = ()=> {
  const CITIES_MAPPING = [
    {
      name: 'Sydney',
      temperature: 12,
      weather: 'Sunny',
      code: '10d'
    },
    {
      name: 'Melbourne',
      temperature: 13,
      weather: 'Sunny',
      code: '04n'
    },
    {
      name: 'Darwin',
      temperature: 15,
      weather: 'Sunny',
      code: '04n'
    }
  ]
  return (
    <div className="mr-12">
      <div className="text-2xl tracking-widest mb-8">Other Cities</div>
      {
        CITIES_MAPPING.map(({ name, temperature, weather, code })=> (
          <City 
            key={name}
            name={name}
            temperature={temperature}
            weather={weather}
            code={code}
          />
        ))
      }
    </div>
  )
}

export default OtherCities