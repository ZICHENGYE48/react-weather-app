import { useEffect, useState } from "react"
import { group } from "../../../../apis/group"
import City from "./components/City"

const OtherCities = ()=> {
  const [otherCities, setOtherCities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    group()
    .then((res)=> res.data)
    .then((cities)=> {
      const otherCities = cities.list.sort((a, b) => a.name.localeCompare(b.name)).map(({ name, main, weather })=> ({
        name: name,
        temperature: main.temp,
        weather: weather[0].main,
        code: weather[0].icon
      }))
      setOtherCities(otherCities)
    })
    .finally(()=> setLoading(false))
  },[])

  return (
    <div className="mr-12">
      <div className="text-2xl tracking-widest mb-8">Other Cities</div>
      {
        loading ? <div>loading</div> : (
          <div>
            {
              otherCities.map(({ name, temperature, weather, code })=> (
                <City 
                  key={name}
                  name={name}
                  temperature={parseInt(temperature)}
                  weather={weather}
                  code={code}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default OtherCities