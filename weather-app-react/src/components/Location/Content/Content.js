import React from 'react';

const content = (props) => {

	const { location } = props;

	return (
		<div className="flex-shrink-0 ml-2">{location}</div>
	);
};

export default content;
