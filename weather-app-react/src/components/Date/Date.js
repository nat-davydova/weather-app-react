import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Day from './Day/Day';
import Month from './Month/Month';

const date = (props) => {

	const { day, month } = props;

	const dateClasses = classnames(
		`date`,
		`text-center`,
		`d-flex`,
		`justify-content-center`,
	);

	return(

		<Row>
			<Col colWidth={12}>

				<div className={dateClasses}>

					<Day day={day}/>

					<Month month={month}/>

				</div>

			</Col>
		</Row>

	);

};

export default date;
