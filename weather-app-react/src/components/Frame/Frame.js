import React from 'react';
import classnames from 'classnames';

import classes from './Frame.module.scss';

const frame = ({ children }) => {

	const frameClasses = classnames(
		classes.frame,
		`container`
	);

	return(
		<div className={frameClasses}>
			{children}
		</div>
	);
};

export default frame;
