import React from 'react';

import classes from './Month.module.scss';

const month = ({ month }) => {

	return <div className={classes.month}>{month}</div>

};

export default month;
