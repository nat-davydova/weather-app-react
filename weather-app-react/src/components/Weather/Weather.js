import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Preloader from 'components/Preloader/Preloader';
import WeatherInfo from './WeatherInfo/WeatherInfo';

const weather = (props) => {

	const { weatherType, localHours } = props;

	const weatherClasses = classnames(
		'mt-3',
		'mt-sm-5',
		'd-flex',
		'flex-column',
		'align-items-center'
	);

	return(
		<Row>
			<Col colWidth={12}>
				<div className={weatherClasses}>

					<WeatherInfo localHours={localHours}
								 weatherType={weatherType}/>

					{/*{weather ? null : <Preloader iconSize={`md`} color={`text-success`}/>}*/}

				</div>
			</Col>
		</Row>
	);

};

export default weather;
