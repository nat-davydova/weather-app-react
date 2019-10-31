import React, { Component, Fragment } from 'react';

import CurrentDate from 'components/CurrentDate/CurrentDate';
import CurrentTime from 'components/CurrentTime/CurrentTime';

class Home extends Component{

	constructor(props) {

		super(props);

		const fullDate = new Date();

		this.state = {
			currentDate: {
				day: fullDate.getDate(),
				month: fullDate.toLocaleDateString('en-US', { month: 'short' }),
				year: fullDate.getFullYear(),
			},

			currentTime: {
				hours: fullDate.toLocaleTimeString('default',
						{hour: '2-digit', hour12: false}
					),
				mins: fullDate.toLocaleTimeString('default', {minute: '2-digit'}),
			}
		};
	}

	render() {

		return(
			<Fragment>

				<CurrentDate day={this.state.currentDate.day}
							 month={this.state.currentDate.month}
							 year={this.state.currentDate.year}/>

				<CurrentTime hours={this.state.currentTime.hours}
							 mins={this.state.currentTime.mins}/>

			</Fragment>
		);
	}

}

export default Home;
