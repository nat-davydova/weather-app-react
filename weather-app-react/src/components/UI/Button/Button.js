import React from 'react';
import classnames from 'classnames';

const button = ({ children, type, className, clicked }) => {

	const btnClasses = classnames(
		className,
		'btn'
	);

	return <button className={btnClasses}
				   type={type}
				   onClick={clicked}>{children}</button>

};

export default button;
