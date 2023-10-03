const City = ({
  name,
  temperature,
  weather
}) => (
  <div className="mb-4 flex justify-between">
    <div>{name}</div>
    <div>{temperature}</div>
    <div>{weather}</div>
  </div>
)

export default City