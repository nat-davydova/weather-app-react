import React from 'react';

import classes from './Frame.module.scss';

const frame = (props) => (
	<div className={`${classes.frame} container`}>
		{props.children}
	</div>
);

export default frame;