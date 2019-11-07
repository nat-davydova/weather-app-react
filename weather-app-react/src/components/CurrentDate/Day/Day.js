import React from 'react';

import classes from './Day.module.scss';

const day = ({ day }) => {

	return <div className={classes.day}>{day}</div>

};

export default day;
