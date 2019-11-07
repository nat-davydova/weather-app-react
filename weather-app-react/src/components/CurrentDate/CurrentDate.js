import React from 'react';
import PropTypes from 'prop-types';

import Row from 'components/Miscellanious/Row/Row';
import Col from 'components/Miscellanious/Col/Col';
import Day from './Day/Day';
import Month from './Month/Month';
import Year from './Year/Year';

const currentDate = ({ day, month, year }) => {

	return(

		<Row>
			<Col colWidth={12}>

				<div className="date text-center d-flex justify-content-center">

					<Day day={day}/>

					<Month month={month}/>

					<Year year={year}/>

				</div>

			</Col>
		</Row>

	);

};

currentDate.propTypes = {
	day: PropTypes.number,
	month: PropTypes.string,
	year: PropTypes.number
};

export default currentDate;
