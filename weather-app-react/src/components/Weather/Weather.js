import React from 'react';
import PropTypes from 'prop-types';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Preloader from 'components/Preloader/Preloader';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import Error from "components/Miscellanious/Error/Error";

const weather = ({ weatherContent, weatherDetails, localHours, error, tempSwitch, reload }) => {

	const weatherInfo = <WeatherInfo localHours={localHours}
									 weatherDetails={weatherDetails}
									 error={error}
									 tempSwitch={tempSwitch}
									 reload={reload}/>;

	return(
		<Row>
			<Col className="col-12">
				<div className="mt-3 mt-sm-5 d-flex flex-column align-items-center">

					{ !(weatherContent) && <Preloader iconSize={`md`} className='text-success'/>}

					{ weatherDetails ? weatherInfo : <Error errorText={error}/>}

				</div>
			</Col>
		</Row>
	);

};

weather.propTypes = {
	localHours: PropTypes.string,
	weatherContent: PropTypes.object,
	weatherDetails: PropTypes.object,
	error: PropTypes.string,
	clicked: PropTypes.func,
	reload: PropTypes.func
};

export default weather;
