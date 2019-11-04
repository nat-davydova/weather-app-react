import React, { Fragment } from 'react';

import Icon from './Icon/Icon';
import Title from './Title/Title';

const weatherInfo = (props) => {

	const { weatherType, localHours } = props;

	return(
		<Fragment>

			<Icon localHours={localHours}
				  weatherType={weatherType}/>

			<Title weatherType={weatherType}/>

		</Fragment>
	);

};

export default weatherInfo;
