import React from 'react';
import classnames from 'classnames';

import Icon from 'components/Miscellanious/Icon/Icon';

import { ReactComponent as LoaderIcon } from 'assets/img/icons/loader.svg';

import classes from './Preloader.module.scss';

const preloader = ({ iconSize, className }) => {

	const loaderClasses = classnames(
		classes.preloader,
		className
	);

	return (

		<div className={loaderClasses}>

			<Icon size={iconSize}>
				<LoaderIcon/>
			</Icon>

		</div>

	)
};

export default preloader;
