import React from 'react';

const detail = (props) => {

	const { title, value, measure, children } = props;

	return(
		<li className="detail-item">
			<strong>{`${title}: `}</strong>
			<span>{`${value}${measure}`}</span>
			{children}
		</li>
	);
};

export default detail;
