import React, { Component, Fragment } from 'react';

import CurrentDate from 'components/CurrentDate/Date';

class Home extends Component{

	constructor(props) {

		super(props);

		const fullDate = new Date();

		this.state = {
			currentDate: {
				day: fullDate.getDate(),
				month: fullDate.toLocaleString('en-US', { month: 'short' }),
				year: fullDate.getFullYear()
			}
		};

		console.log(this.state);
	}

	render() {

		return(
			<Fragment>

				<CurrentDate day={this.state.currentDate.day}
					month={this.state.currentDate.month}
					year={this.state.currentDate.year}/>

			</Fragment>
		);
	}

}

export default Home;
