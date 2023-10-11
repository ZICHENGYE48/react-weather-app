import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import DayOfWeek from './DayOfWeek';

describe('<DayOfWeek>', () => {
	let renderResult;
	
	const props = {
		day: 'MON',
		temperature: 9,
    code: '03n',
    weather: 'Clouds'
	};

	beforeEach(() => {
		renderResult = render(<DayOfWeek {...props} />); 
	});

	it('should render day', () =>{
		const { getByText } = renderResult; 

		expect(getByText(props.day)).toBeInTheDocument();
	});

	it('should render temperature', () =>{
		const { getByText } = renderResult; 

		expect(getByText(`${props.temperature.toString()}°`)).toBeInTheDocument();
	});

	it('should render weather image', () =>{
		const {getByAltText} = renderResult;

		expect(getByAltText(props.weather)).toBeInTheDocument();
		expect(getByAltText(props.weather).getAttribute('src'))
			.toBe(`http://openweathermap.org/img/wn/${props.code}.png`)
	});
})