import React from 'react';
import classnames from 'classnames';

//*** BOOTSTRAP COL COMPONENT

const col = (props) => {

	const { colWidth, children } = props;

	const colClasses = classnames(`col-${colWidth}`);

	return <div className={colClasses}>{children}</div>;

};

export default col;
