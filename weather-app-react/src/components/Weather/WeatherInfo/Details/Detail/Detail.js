import React from 'react';

const detail = (props) => {

	const { title, value, measure } = props;

	return(
		<li className="detail-item">
			<strong>{`${title}: `}</strong>
			<span>{`${value}${measure}`}</span>
		</li>
	);
};

export default detail;
