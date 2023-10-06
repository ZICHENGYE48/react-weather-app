import axios from 'axios'

const API_KEY = 'd3100a764757dcbafccdd87f39b8e95f'
const UNITS = 'metric'

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
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
    params: {
      lat: lat,
      lon: lon,
      units: UNITS,
      appid: API_KEY
    }
  })
}
