import React, { Component, Fragment } from 'react';
import axios from 'axios';

import CurrentDate from 'components/CurrentDate/CurrentDate';
import CurrentTime from 'components/CurrentTime/CurrentTime';
import Location from 'components/Location/Location';

const timeOptions = {
	hour12 : false,
	hour:  "2-digit",
	minute: "2-digit",
};

//promise for HTML5 Geolocation API
const getCoords = () => {

	return new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});

};

class Home extends Component{

	constructor(props) {

		super(props);

		const fullDate = new Date();

		const time = fullDate.toLocaleTimeString('default', timeOptions).split(':');

		this.state = {
			currentDate: {
				day: fullDate.getDate(),
				month: fullDate.toLocaleDateString('en-US', { month: 'short' }),
				year: fullDate.getFullYear(),
			},

			currentTime: {
				hours: time[0],
				mins: time[1],
			},

			location: {
				lat: null,
				long: null
			}
		};
	};

	async componentDidMount() {

		const { coords } = await getCoords();

		const { latitude, longitude } = coords;

		this.setState({
			location: {
				...this.state.location,
				long: longitude,
				lat: latitude
			}
		});

		console.log(this.state);

	}

	render() {

		return(
			<Fragment>

				<CurrentDate day={this.state.currentDate.day}
							 month={this.state.currentDate.month}
							 year={this.state.currentDate.year}/>

				<CurrentTime hours={this.state.currentTime.hours}
							 mins={this.state.currentTime.mins}/>

				 {/*<Location location={this.state.location}/>*/}

			</Fragment>
		);
	}

}

export default Home;
