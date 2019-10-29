import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';

const date = (props) => {

	const dateClasses = classnames(
		`text-center`,
		`d-flex`,
		`justify-content-center`
	);

	return(

		<Row>
			<Col colWidth={12}>

				<div className={dateClasses}>

				</div>

			</Col>
		</Row>

	);

};

export default date;
