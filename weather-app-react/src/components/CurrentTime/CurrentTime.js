import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';

const currentTime = (props) => {

	const timeClasses = classnames(
		'time',
		'd-flex',
		'justify-content-center',
		'mt-2',
		'mt-sm-4',
	);

	return(
		<Row>
			<Col colWidth={12}>

				<div className={timeClasses}>

				</div>

			</Col>
		</Row>
	);

};

export default currentTime;
