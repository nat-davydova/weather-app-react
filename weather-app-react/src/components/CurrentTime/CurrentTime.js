import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Hours from './Hours/Hours';
import Mins from './Mins/Mins';

import classes from './CurrentTime.module.scss';

const currentTime = ({ hours, mins }) => {

	const timeClasses = classnames(
		classes.time,
		'd-flex',
		'justify-content-center',
		'mt-2',
		'mt-sm-4',
	);

	return(

		<Row>
			<Col className="col-12">

				<div className={timeClasses}>

					<Hours hours={hours}/>

					<Mins mins={mins}/>

				</div>

			</Col>
		</Row>

	);

};

currentTime.propTypes = {
	hours: PropTypes.string,
	mins: PropTypes.string,
};

export default currentTime;
