import React from 'react';

const title = (props) => {

	const { weatherType } = props;

	return <h4 className="text-center mt-4">{weatherType}</h4>
};

export default title;
