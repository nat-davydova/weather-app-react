import React from 'react';
import classnames from 'classnames';

import classes from './Details.module.scss';

const detailsMeasurements = {
	temp: '°',
	wind: 'm/s',
	pressure: 'hPA',
	humidity: '%',
	sunrise: '',
	sunset: ''
};

const details = (props) => {

	const { details } = props;

	const { humidity, pressure, sunrise, sunset, temp, wind } = details;

	const detailsListClasses = classnames(
		classes.details_list,
		'p-0'
	);

	return(
		<div className="mt-4">
			<ul className={detailsListClasses}>

			</ul>
		</div>
	);
};

export default details;
