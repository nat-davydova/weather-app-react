import React, { Fragment } from 'react';

import Icon from './Icon/Icon';
import Title from './Title/Title';
import Details from './Details/Details';
import Reload from './Reload/Reload';

//rendering weather type from weather ID (got from API)
const weatherType = idWeather => {

	let weatherType;

	switch(true) {

		case(idWeather >= 200 && idWeather <= 232):
			weatherType = 'Thunderstorm';
			break;

		case((idWeather >= 300 && idWeather <= 321) || idWeather === 500 || idWeather === 501):
			weatherType = 'Rain';
			break;

		case(idWeather >= 502 && idWeather <= 531):
			weatherType = 'Shower Rain';
			break;

		case(idWeather >= 600 && idWeather <= 622):
			weatherType = 'Snow';
			break;

		case(idWeather >= 701 && idWeather <= 781):
			weatherType = 'Fog';
			break;

		case(idWeather === 800):
			weatherType = 'Clear Sky';
			break;

		case(idWeather === 801):
			weatherType = 'Few Clouds';
			break;

		case(idWeather === 802):
			weatherType = 'Scattered Clouds';
			break;

		case(idWeather === 803 || idWeather === 804):
			weatherType = 'Broken Clouds';
			break;

		default:
			weatherType = null;
			break;
	}

	return weatherType;

};

const timeOptions = {
	hour12 : false,
	hour:  "2-digit",
	minute: "2-digit",
};

//sunset and sunrise from unix into readable date
const unixToDate = unix => {

	const time = new Date(unix * 1000).toLocaleTimeString('default', timeOptions).split(':');

	const hours = time[0];

	const mins =  time[1];

	return [hours,mins];

};

const weatherInfo = (props) => {

	const { weatherDetails, localHours, clicked, reload } = props;

	const { id, sunrise, sunset } = weatherDetails;

	const weatherTitle = weatherType(id);

	const sunriseTime = {
		hours: unixToDate(sunrise)[0],
		mins: unixToDate(sunrise)[1]
	};

	const sunsetTime = {
		hours: unixToDate(sunset)[0],
		mins: unixToDate(sunset)[1]
	};


	return(
		<Fragment>

			<Icon weatherType={weatherTitle}
				  localHours={localHours}
				  sunriseHours={sunriseTime.hours}
				  sunsetHours={sunsetTime.hours} />

			<Title weatherType={weatherTitle} />

			<Details details={weatherDetails}
					 sunrise={sunriseTime}
					 sunset={sunsetTime}
					 clicked={clicked} />

			 <Reload reload={reload}/>

		</Fragment>
	);

};

export default weatherInfo;
