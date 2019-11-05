import React from 'react';
import classnames from 'classnames';

const content = (props) => {

	const { location } = props;

	const locationClasses = classnames(
		`flex-shrink-0`,
		`ml-2`
	);

	return <div className={locationClasses}>{location}</div>;
};

export default content;
