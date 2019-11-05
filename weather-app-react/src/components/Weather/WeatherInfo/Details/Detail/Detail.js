import React from 'react';

const detail = (props) => {

	const { title, value, units, children } = props;

	return(
		<li className="detail-item">
			<strong>{`${title}: `}</strong>
			<span>{`${value}${units}`}</span>
			{children}
		</li>
	);
};

export default detail;
