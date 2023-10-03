const BackgroundImage = ({
  image,
  children
}) => (
  <div 
    style={{backgroundImage: `url(${image})`}}
    className="bg-cover bg-center">
    {children}
  </div>
)

export default BackgroundImage