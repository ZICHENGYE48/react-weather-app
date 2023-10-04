import axios from 'axios'

const API_KEY = 'd3100a764757dcbafccdd87f39b8e95f'
const UNITS = 'metric'

export const getCurrentWeather = (lat,lon)=> {
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`)
}
