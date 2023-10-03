import React from 'react';
import CurrentCity from './components/CurrentCity';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';

const App = ()=> (
  <React.Fragment>
    <CurrentCity />
    <OtherCities />
    <Forecast />
  </React.Fragment>
)

export default App;
