import React from 'react';

import classes from './Month.module.scss';

const month = (props) => {

	const { month } = props;

	return <div className={classes.month}>{month}</div>

};

export default month;
