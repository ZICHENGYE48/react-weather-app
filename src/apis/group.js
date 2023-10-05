import axios from 'axios'

const API_KEY = 'd3100a764757dcbafccdd87f39b8e95f'
const UNITS = 'metric'

const CITIES = [
  { name: 'Melbourne', id: 2158177 },
  { name: 'Sydney', id: 2147714 },
  { name: 'Brisbane', id: 2174003 },
  { name: 'Perth', id: 2063523 }
]

export const group = ()=> {
  return axios.get(`https://api.openweathermap.org/data/2.5/group`, {
    params: {
      id: CITIES.map(({ id })=> id).join(),
      units: UNITS,
      appid: API_KEY
    }
  })
}
