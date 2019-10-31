import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';

const location = (props) => {

	const locationClasses = classnames(
		'd-flex',
		'justify-content-center',
		'align-items-center',
		'flex-wrap'
	);

	return(

		<Row>
			<Col colWidth={12}>

				<div className={locationClasses}>

				</div>

			</Col>
		</Row>

	);
};

export default location;
