import React from 'react';
import classnames from 'classnames';

import classes from './Frame.module.scss';

const frame = (props) => {

	const frameClasses = classnames(classes.frame, `container`);

	return(
		<div className={frameClasses}>
			{props.children}
		</div>
	);
};

export default frame;
