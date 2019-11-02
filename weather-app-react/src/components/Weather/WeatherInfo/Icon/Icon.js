import React from 'react';

import Icon from 'components/Miscellanious/Icon/Icon';

import { ReactComponent as MistIcon } from 'assets/img/weather/mist.svg';

//pick weather icon
const weatherIcon = (weather, localHours, sunset, sunrise) => {

	let icon;

	switch(weather) {

		case 'Thunderstorm':
			icon = 'thunderstorm';
			break;

		case 'Rain':
			icon = 'rain';
			break;

		case 'Shower Rain':
			icon = 'shower-rain';
			break;

		case 'Snow':
			icon = 'snow';
			break;

		case 'Fog':
			icon = 'mist';
			break;

		case 'Mist':
			icon = 'mist';
			break;

		case 'Clear Sky':
			if (localHours < sunset && localHours > sunrise) {
				icon = 'clear-sky'
			} else {
				icon = 'clear-sky-night'
			}
			break;

		case 'Few Clouds':
			if (localHours < sunset && localHours > sunrise) {
				icon = 'few-clouds'
			} else {
				icon = 'few-clouds-night'
			}
			break;

		case 'Scattered Clouds':
			icon = 'scattered-clouds';
			break;

		case 'Broken Clouds':
			icon = 'broken-clouds';
			break;

		default:
			icon = 'thermometer';
			break;
	}



	return icon.charAt(0).toUpperCase() + icon.slice(1);

};

const icon = (props) => {

	const { weatherType } = props;

	const iconName = weatherIcon(weatherType, 20, 8, 17);

	const WeatherIconName = `${iconName}Icon`;


	return(

		<Icon size={'lg'}>
			<MistIcon/>
		</Icon>

	);

};

export default icon;
