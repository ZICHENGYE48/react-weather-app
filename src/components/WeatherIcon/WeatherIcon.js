const WeatherIcon = ({
  code,
  weather,
  className
})=>(
  <img className={className} src={`http://openweathermap.org/img/wn/${code}.png`} alt={weather}/>
)

export default WeatherIcon