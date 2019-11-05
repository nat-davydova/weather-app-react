import React, { Fragment } from 'react';

import Error from 'components/Miscellanious/Error/Error';
import Icon from './Icon/Icon';
import Title from './Title/Title';
import Details from './Details/Details';

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
	}

	return weatherType;

};

//sunset and sunrise from unix into readable date
const unixToDate = unix => {

	const date = new Date(unix * 1000);

	const hours = date.getHours();

	const mins =  date.getMinutes();

	return [hours,mins];

};

const weatherInfo = (props) => {

	const { error, weatherDetails, localHours, clicked } = props;

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

			{ error && <Error errorText={error}/> }

			{weatherDetails &&

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

				</Fragment>

			}

		</Fragment>
	);

};

export default weatherInfo;
