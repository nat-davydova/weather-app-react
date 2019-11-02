import React, { Fragment } from 'react';

import Icon from './Icon/Icon';
import Title from './Title/Title';

const weatherInfo = (props) => {

	const { weatherType } = props;

	return(
		<Fragment>

			<Icon weatherType={weatherType}/>

			<Title weatherType={weatherType}/>

		</Fragment>
	);

};

export default weatherInfo;
