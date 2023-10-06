import OpenWeatherAPI from "../libs/OpenWeatherAPI"

const CITIES = [
  { name: 'Melbourne', id: 2158177 },
  { name: 'Sydney', id: 2147714 },
  { name: 'Brisbane', id: 2174003 },
  { name: 'Perth', id: 2063523 }
]

export const group = ()=> {
  return OpenWeatherAPI.get('/group', {
    params: {
      id: CITIES.map(({ id })=> id).join()
    }
  })
}
