import React from 'react';

import Icon from 'components/Miscellanious/Icon/Icon';

import { ReactComponent as LoaderIcon } from 'assets/img/icons/loader.svg';
import classes from './Preloader.module.scss';

const preloader = (props) => {

	const { iconSize } = props;

	return (

		<div className={classes.preloader}>
			<Icon size={iconSize}>
				<LoaderIcon/>
			</Icon>
		</div>

	)
};

export default preloader;
