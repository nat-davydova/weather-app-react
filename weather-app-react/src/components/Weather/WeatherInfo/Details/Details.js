import React from 'react';
import classnames from 'classnames';

import Detail from './Detail/Detail';

import classes from './Details.module.scss';

const detailsMeasurements = {
	temp: '°C',
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

	const detailsArr = [];

	for (let [title, measure] of Object.entries(detailsMeasurements)) {

		let arrayItem = <Detail title={title} measure={measure}/>;

		detailsArr.push(arrayItem);
	}

	return(
		<div className="mt-4">
			<ul className={detailsListClasses}>
				{detailsArr}
			</ul>
		</div>
	);
};

export default details;
