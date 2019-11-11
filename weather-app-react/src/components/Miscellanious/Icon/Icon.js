import React from 'react';
import classnames from 'classnames';

import classes from './Icon.module.scss';

const icon = ({ size, children, className }) => {

	const iconClasses = classnames(
		classes.icon,
		classes[`icon--${size}`],
		className
	);

	return(

		<span className={iconClasses}>
			{children}
		</span>
	);

};

export default icon;
