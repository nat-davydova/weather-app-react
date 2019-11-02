import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Icon from 'components/Miscellanious/Icon/Icon';
import Preloader from 'components/Preloader/Preloader';

import { ReactComponent as LocationIcon } from 'assets/img/icons/map-marker.svg';

const location = (props) => {

	const { location } = props;

	const locationClasses = classnames(
		'd-flex',
		'justify-content-center',
		'align-items-center',
		'flex-wrap',
		'mt-2',
		'mt-sm-4'
	);

	return(

		<Row>
			<Col colWidth={12}>

				<div className={locationClasses}>

					<div className="text-success">
						<Icon size={'sm'}>
							<LocationIcon/>
						</Icon>
					</div>

					<div className="text-success">
						<Preloader iconSize={'sm'}/>
					</div>

				</div>

			</Col>
		</Row>

	);
};

export default location;
