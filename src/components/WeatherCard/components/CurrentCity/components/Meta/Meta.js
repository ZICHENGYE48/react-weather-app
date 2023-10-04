const Meta = ({
  title,
  children,
  loading
}) => (
  <div className="text-white/70">
    <h3 className="mb-3">{title}</h3>
    <div className="text-center">
      {loading? '...' : children}
      </div>
  </div>
)

export default Meta