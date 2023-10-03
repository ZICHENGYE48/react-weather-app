import bg from './assets/app-bg.png';
import BackgroundImage from './components/BackgroundImage';
import WeatherCard from './components/WeatherCard';

const App = ()=> (
  <BackgroundImage image={bg}>
    <div className="flex justify-center items-center h-screen">
        <WeatherCard />
    </div>
  </BackgroundImage>
)

export default App;
