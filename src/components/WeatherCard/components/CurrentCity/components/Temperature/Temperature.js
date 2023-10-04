const Temperature = ({
  className,
  value,
  loading
}) => (
  <div className={className}>
    {loading ? 'Loading...' : `${value}°`}
  </div>
)

export default Temperature