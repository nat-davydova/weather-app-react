import React, { Fragment } from 'react';

import Error from 'components/Miscellanious/Error/Error';
import Icon from './Icon/Icon';
import Title from './Title/Title';

const weatherInfo = (props) => {

	const { error, weatherType, localHours } = props;

	return(
		<Fragment>

			{ error && <Error errorText={error}/> }

		</Fragment>
	);

};

export default weatherInfo;
