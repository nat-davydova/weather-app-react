import React from 'react';

import classes from './Year.module.scss';

const year = (props) => {

	const { year } = props;

	return <div className={classes.year}>{year}</div>

};

export default year;
