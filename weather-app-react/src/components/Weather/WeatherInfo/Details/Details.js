import React from 'react';
import classnames from 'classnames';
import uuid from 'uuid/v1';

import Detail from './Detail/Detail';
import Button from "components/UI/Button/Button";

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

	const { details, sunrise, sunset } = props;

	const { hours: hoursSr, mins: minsSr } = sunrise;

	const { hours: hoursSt, mins: minsSt } = sunset;

	const btnToFClasses = classnames(
		classes.details_btn,
		'btn-success'
	);

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

		let newTitle = title.charAt(0).toUpperCase() + title.slice(1);

		let arrayItem;

		if(title === 'sunrise') {

			arrayItem = <Detail title={newTitle}
								measure={measure}
								value={`${hoursSr}:${minsSr}`}
								key={uuid()}/>;

		} else if(title === 'sunset') {

			arrayItem = <Detail title={newTitle}
								measure={measure}
								value={`${hoursSt}:${minsSt}`}
								key={uuid()}/>;

		} else if(title === 'temp') {

			arrayItem = <Detail title={newTitle}
								measure={measure}
								value={details[title]}
								key={uuid()}>

				<Button className={btnToFClasses}>F</Button>

			</Detail>;

		} else {
			arrayItem = <Detail title={newTitle}
								measure={measure}
								value={details[title]}
								key={uuid()}/>;
		}

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
