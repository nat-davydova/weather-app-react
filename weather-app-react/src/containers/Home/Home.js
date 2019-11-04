import React, { Component, Fragment } from 'react';
import axiosLocation from 'interceptors/axios-location';
import axiosWeather from 'interceptors/axios-weather';

import { mapApi, weatherApi } from "../../configs/apiKeys";

import CurrentDate from 'components/CurrentDate/CurrentDate';
import CurrentTime from 'components/CurrentTime/CurrentTime';
import Location from 'components/Location/Location';
import Weather from 'components/Weather/Weather';

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

			location: {},
			weather: {}
		};
	};

	getLocation = async () => {

		try {

			const { coords } = await getCoords();

			const { latitude, longitude } = coords;

			const placeObj = await axiosLocation (`?key=${mapApi}&lat=${latitude}&lon=${longitude}&format=json`);

			const { state, country } = placeObj.data.address;

			const place = `${state}, ${country}`;

			this.setState({
				location: {
					long: longitude,
					lat: latitude,
					place: place
				}
			});

		} catch (e) {
			console.log(e);

			this.setState({
				location: {
					locationError: `We can't define your location, sorry :(`
				}
			});


		}

	};

	getWeather = async (lat, long) => {
		
		try {

			const weatherCast = await axiosWeather(`?lat=${lat}&lon=${long}&APPID=${weatherApi}&units=metric`);

			console.log(weatherCast);

			const { wind, main: baseInfo, weather, sys: time } = weatherCast.data;

			this.setState({
				weather: {
					...this.state.weather,
					id: weather[0].id,
					humidity: baseInfo.humidity,
					pressure: baseInfo.pressure,
					sunrise: time.sunrise,
					sunset: time.sunset,
					temp: Math.round(baseInfo.temp),
					wind: wind.speed,
				}
			});
			
		} catch (e) {

			console.log(e);

			this.setState({
				weather: {
					weatherError: `We can't define your weather, sorry :(`
				}
			});

		}

		console.log(this.state.weather);
		
	};

	initApp = async () => {

		await this.getLocation();
		await this.getWeather(this.state.location.lat, this.state.location.long);

	};

	async componentDidMount() {

		await this.initApp();

	}

	render() {

		return(
			<Fragment>

				<CurrentDate day={this.state.currentDate.day}
							 month={this.state.currentDate.month}
							 year={this.state.currentDate.year}/>

				<CurrentTime hours={this.state.currentTime.hours}
							 mins={this.state.currentTime.mins}/>

				 <Location location={this.state.location.place ? this.state.location.place : this.state.location.locationError}
						   error={this.state.location.locationError}/>

			   <Weather localHours={this.state.currentTime.hours}
						weatherType="Clear Sky"/>

			</Fragment>
		);
	}

}

export default Home;
