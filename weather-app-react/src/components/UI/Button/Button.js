import React from 'react';
import classnames from 'classnames';

const button = (props) => {

	const { children, type, className } = props;

	const btnClasses = classnames(
		...className,
		'btn'
	);

	return <button className={btnClasses} type={type}>{children}</button>

};

export default button;
