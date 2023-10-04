const Weather = ({
  value,
  loading
}) => (
  <div className="text-white/60 text-2xl text-center uppercase">
    {loading ? '...' : value}
  </div>
)

export default Weather