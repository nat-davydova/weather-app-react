import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Preloader from 'components/Preloader/Preloader';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import Error from "../Miscellanious/Error/Error";

const weather = (props) => {

	const { weatherContent, weatherDetails, localHours, error, clicked } = props;

	const weatherClasses = classnames(
		'mt-3',
		'mt-sm-5',
		'd-flex',
		'flex-column',
		'align-items-center'
	);

	const weatherInfo = <WeatherInfo localHours={localHours}
									 weatherDetails={weatherDetails}
									 error={error}
									 clicked={clicked}/>;

	return(
		<Row>
			<Col colWidth={12}>
				<div className={weatherClasses}>

					{ !(weatherContent) && <Preloader iconSize={`md`} color={'text-success'}/>}

					{ weatherDetails && weatherInfo }

					{error && <Error errorText={error}/>}

				</div>
			</Col>
		</Row>
	);

};

export default weather;
