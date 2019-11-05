import React from 'react';
import classnames from 'classnames';

const button = (props) => {

	const { children, type, className, clicked } = props;

	const btnClasses = classnames(
		className,
		'btn'
	);

	return <button className={btnClasses}
				   type={type}
				   onClick={clicked}>{children}</button> 

};

export default button;
