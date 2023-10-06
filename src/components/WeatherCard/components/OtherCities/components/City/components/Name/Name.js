const Name = ({
  children,
  onClick
}) => (
  <div onClick={()=> onClick(children)} className="tracking-wider w-[120px]">
    {children}
  </div>
)

export default Name