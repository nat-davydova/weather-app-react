import React from 'react';

const detail = ({ title, value, units, children }) => (

	<li className="detail-item">
		<strong>{`${title}: `}</strong>
		<span>{`${value}${units}`}</span>
		{children}
	</li>
);

export default detail;
