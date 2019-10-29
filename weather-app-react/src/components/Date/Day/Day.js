import React from 'react';

import classes from './Day.module.scss';

const day = (props) => {

	const { day } = props;

	return <div className={classes.day}>{day}</div>

};

export default day;
