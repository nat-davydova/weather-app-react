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

	const detailsListClasses = classnames(
		classes.details_list,
		'p-0'
	);

	const detailsClasses = classnames(
		classes.details,
		'mt-4'
	);

	const detailsArr = [];

	for (let [title, measure] of Object.entries(detailsMeasurements)) {

		let arrayItem = <Detail title={title} measure={measure} value={details[title]}/>;

		detailsArr.push(arrayItem);
	}

	return(
		<div className={detailsClasses}>
			<ul className={detailsListClasses}>
				{detailsArr}
			</ul>
		</div>
	);
};

export default details;
