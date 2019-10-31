import React from 'react';

import classes from './Hours.module.scss';

const hours = (props) => {

	const { hours } = props;

	return <div className={classes.hours}>{hours}</div>;

};

export default hours;
