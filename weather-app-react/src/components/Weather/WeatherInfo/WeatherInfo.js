import React, { Fragment } from 'react';

import Error from 'components/Miscellanious/Error/Error';
import Icon from './Icon/Icon';
import Title from './Title/Title';

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

const weatherInfo = (props) => {

	const { error, weatherDetails, localHours } = props;

	const { id } = weatherDetails;

	const weatherTitle = weatherType(id);

	return(
		<Fragment>

			{ error && <Error errorText={error}/> }

			{weatherDetails &&

				<Fragment>

					<Title weatherType={weatherTitle}/>

				</Fragment>

			}

		</Fragment>
	);

};

export default weatherInfo;
