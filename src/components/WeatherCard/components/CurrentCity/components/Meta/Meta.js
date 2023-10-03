const Meta = ({
  title,
  children
}) => (
  <div className="text-white/70">
    <h3 className="mb-3">{title}</h3>
    <div>{children}</div>
  </div>
)

export default Meta