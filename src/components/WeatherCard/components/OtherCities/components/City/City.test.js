import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import City from './City';

describe('<City>', () => {
	let renderResult;
	
	const props = {
		name: 'Sydney',
		temperature: 9 ,
    code: '03n',
    weather: 'Clouds'
	};

	beforeEach(() => {
		renderResult = render(<City {...props} />);
	});

	it('should render name', () =>{
		const {getByText} = renderResult;

		expect(getByText(props.name)).toBeInTheDocument();
	});

	it('should render temperature', () =>{
		const {getByText} = renderResult;

		expect(getByText(`${props.temperature.toString()}°`)).toBeInTheDocument();
	});
	
	it('should render weather image', () =>{
		const {getByAltText} = renderResult;

		expect(getByAltText(props.weather)).toBeInTheDocument();
		expect(getByAltText(props.weather).getAttribute('src'))
			.toBe(`http://openweathermap.org/img/wn/${props.code}.png`)
	});
})