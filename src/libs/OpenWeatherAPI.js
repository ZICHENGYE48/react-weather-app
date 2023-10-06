import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_ID = 'd3100a764757dcbafccdd87f39b8e95f'
const UNITS = 'metric'

const OpenWeatherAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    units: UNITS,
    appid: API_ID
  }
})

export default OpenWeatherAPI