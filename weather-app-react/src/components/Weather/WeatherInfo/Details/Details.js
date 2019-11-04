import React from 'react';
import classnames from 'classnames';

import classes from './Details.module.scss';

const details = (props) => {

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
