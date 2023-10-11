import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import CurrentCity from './CurrentCity';

describe('<CurrentCity>', () => {
	let renderResult;
	
	const props = {
		currentCity: 'Sydney',
    currentCityWeather: {
      current: {
        temp: 10,
        humidity: 60,
        wind_speed: 9,
        weather : [
          {
            main: 'Clouldy'
          }
        ]
      }
    }
	};

	beforeEach(() => {
		renderResult = render(<CurrentCity {...props} />);
	});

	it('should render current city', () =>{
		const {getByText} = renderResult;
		expect(getByText(props.currentCity)).toBeInTheDocument();
	});

	it('should render current city temp', () =>{
		const {getByText} = renderResult;
		expect(getByText(`${props.currentCityWeather.current.temp.toString()}°`)).toBeInTheDocument();
	});

  it('should render current city humidity', () =>{
		const {getByText} = renderResult;
    expect(getByText(`${props.currentCityWeather.current.humidity}%`)).toBeInTheDocument();
  });

  it('should render current city wind speed', () =>{
		const {getByText} = renderResult;
    expect(getByText(`${props.currentCityWeather.current.wind_speed} KM/H`)).toBeInTheDocument();
  });
})