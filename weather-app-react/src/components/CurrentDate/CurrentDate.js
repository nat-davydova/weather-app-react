import React from 'react';
import classnames from 'classnames';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Day from './Day/Day';
import Month from './Month/Month';
import Year from './Year/Year';

const currentDate = (props) => {

	const { day, month, year } = props;

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

					<Year year={year}/>

				</div>

			</Col>
		</Row>

	);

};

export default currentDate;
