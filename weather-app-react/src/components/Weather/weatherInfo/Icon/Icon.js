import React from 'react';
import classnames from 'classnames';

import { ReactComponent as MistIcon } from 'assets/img/weather/mist.svg';

import Icon from 'components/Miscellanious/Icon/Icon';

const icon = (props) => {

	return(
		<Icon size={'lg'}>
			<MistIcon/>
		</Icon>
	);

};

export default icon;
