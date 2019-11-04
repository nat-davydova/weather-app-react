import React from 'react';

const error = (props) => {

	const { errorText } = props;

	return <div className="text-danger">{errorText}</div>
};

export default error;
