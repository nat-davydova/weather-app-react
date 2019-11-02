import React from 'react';
import classnames from 'classnames';

import classes from './Icon.module.scss';

const icon = (props) => {

	const { size, children, color } = props;

	const iconClasses = classnames(
		classes.icon,
		classes[`icon--${size}`],
		`${color}`
	);

	return(

		<span className={iconClasses}>
			{children}
		</span>
	);

};

export default icon;
