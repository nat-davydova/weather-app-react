import React from 'react';

import classes from './Hours.module.scss';

const hours = ({ hours }) => {

	return <div className={classes.hours}>{hours}</div>;

};

export default hours;
