import OpenWeatherAPI from "../libs/OpenWeatherAPI"

const CITIES_GEO = [
  {
    name: 'Sydney',
    lat: -33.8698439,
    lon: 151.2082848
  },
  {
    name: 'Melbourne',
    lat: -37.8142176,
    lon: 144.9631608
  },
  {
    name: 'Perth',
    lat: -31.9558964,
    lon: 115.8605801
  },
  {
    name: 'Brisbane',
    lat: -27.4689682,
    lon: 153.0234991
  }
]

export const oneCall = (city)=> {
  const { lat, lon }  = CITIES_GEO.find(({name})=> name === city)
  return OpenWeatherAPI.get('/onecall', {
    params: {
      lat: lat,
      lon: lon
    }
  })
}
