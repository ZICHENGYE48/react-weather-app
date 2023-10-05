import axios from 'axios'

const API_KEY = 'd3100a764757dcbafccdd87f39b8e95f'
const UNITS = 'metric'

const SYDNEY_GEO = {
  lat: -33.8698439,
  lon: 151.2082848
}

export const oneCall = ()=> {
  const { lat, lon } = SYDNEY_GEO
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
    params: {
      lat: lat,
      lon: lon,
      units: UNITS,
      appid: API_KEY
    }
  })
}
