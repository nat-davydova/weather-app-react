import React, { Component, Fragment } from 'react';
import axiosLocation from 'interceptors/axios-location';
import axiosWeather from 'interceptors/axios-weather';

import { mapApi, weatherApi } from "configs/apiKeys";
import { timeOptions } from "../../configs/timeOptions";

import CurrentDate from 'components/CurrentDate/CurrentDate';
import CurrentTime from 'components/CurrentTime/CurrentTime';
import Location from 'components/Location/Location';
import Weather from 'components/Weather/Weather';

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

			const { wind, main: baseInfo, weather, sys: time } = weatherCast.data;

			this.setState({
				weather: {

					details: {
						id: weather[0].id,
						humidity: baseInfo.humidity,
						pressure: baseInfo.pressure,
						sunrise: time.sunrise,
						sunset: time.sunset,
						temp: {
							value: Math.round(baseInfo.temp),
							units: 'C'
						},
						wind: wind.speed,
					}
				}
			});

		} catch (e) {

			this.setState({
				weather: {
					weatherError: `We can't define your weather, sorry :(`
				}
			});

		}
		
	};

	initApp = async () => {

		this.setState({
			location: {},
			weather: {}
		});

		await this.getLocation();
		await this.getWeather(this.state.location.lat, this.state.location.long);

	};

	componentDidMount() {

		this.initApp();

	}

	tempUnitsSwitcher = (tempValue, tempUnits) => {

		let newTemp, newUnits;

		if(tempUnits === 'C') {
			newTemp = Math.round((tempValue * 9/5) + 32);
			newUnits = 'F';
		} else {
			newTemp = Math.round((tempValue - 32) * 5/9);
			newUnits = 'C';
		}

		this.setState({
			weather: {
				details: {
					...this.state.weather.details,
					temp: {
						value: newTemp,
						units: newUnits
					}
				}
			}
		});
	};

	render() {

		const { currentDate, currentTime, location, weather } = this.state;

		const { details } = weather;

		return(
			<Fragment>

				<CurrentDate day={currentDate.day}
							 month={currentDate.month}
							 year={currentDate.year}/>

				<CurrentTime hours={currentTime.hours}
							 mins={currentTime.mins}/>

			    <Location location={location.place}
						   error={location.locationError}/>

				<Weather localHours={currentTime.hours}
						weatherContent={weather.details || weather.weatherError}
						weatherDetails={weather.details}
						error={weather.weatherError}
						clicked={() => this.tempUnitsSwitcher(details.temp.value, details.temp.units)}
						reload={this.initApp}/>

			</Fragment>
		);
	}

}

export default Home;
