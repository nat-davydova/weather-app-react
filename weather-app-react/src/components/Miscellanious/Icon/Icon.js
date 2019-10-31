import React from 'react';
import classnames from 'classnames';

import classes from './Icon.module.scss';

const icon = (props) => {

	const { children } = props;

	return(

		<span>
			{children}
		</span>
	);

};

export default icon;
