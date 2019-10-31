import React from 'react';
import classnames from 'classnames';

import classes from './Icon.module.scss';

const icon = (props) => {

	const { size, children } = props;

	const iconClasses = classnames(
		classes.icon,
		classes[`icon--${size}`]
	);

	return(

		<span className={iconClasses}>
			{children}
		</span>
	);

};

export default icon;
