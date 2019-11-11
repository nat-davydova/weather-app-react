import React, { Component, Fragment } from 'react';
import axiosLocation from 'interceptors/axios-location';
import axiosWeather from 'interceptors/axios-weather';

import { mapApi, weatherApi } from "configs/apiKeys";
import { timeOptions } from "../../configs/timeOptions";
import { getCoords } from "../../utils/geolocation";

import CurrentDate from 'components/CurrentDate/CurrentDate';
import CurrentTime from 'components/CurrentTime/CurrentTime';
import Location from 'components/Location/Location';
import Weather from 'components/Weather/Weather';

class Home extends Component{

	state = {
		currentDate: {},
		currentTime: {},
		location: {},
		weather: {}
	};

	getDate = () => {

		const fullDate = new Date();

		const time = fullDate.toLocaleTimeString('default', timeOptions).split(':');

		this.setState({

			currentDate: {
				day: fullDate.getDate(),
				month: fullDate.toLocaleDateString('en-US', { month: 'short' }),
				year: fullDate.getFullYear(),
			},

			currentTime: {
				hours: time[0],
				mins: time[1],
			}

		});
	};

	getLocation = async () => {

		const locationErrorText = `We can't define your location, sorry :(`;

		try {

			const { coords } = await getCoords();

			const { latitude, longitude } = coords;

			const placeObj = await axiosLocation (`?key=${mapApi}&lat=${latitude}&lon=${longitude}&format=json`);

			if(placeObj) {

				const { state, country } = placeObj.data.address;

				const place = `${state}, ${country}`;

				this.setState({
					location: {
						long: longitude,
						lat: latitude,
						place: place,
					}
				});

			} else {

				this.setState({
					location: {
						locationError: locationErrorText,
					}
				});

			}

		} catch (e) {
			console.log(e);

			this.setState({
				location: {
					locationError: locationErrorText,
				}
			});

		}

	};

	getWeather = async (lat, long) => {

		const weatherErrorText = `We can't define your weather, sorry :(`;

		if(!(lat && long)) {

			this.setState({
				weather: {
					weatherError: weatherErrorText,
				}
			});

		}

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
					weatherError: weatherErrorText,
				}
			});

		}
		
	};

	cleanState = () => {
		this.setState({
			currentDate: {},
			currentTime: {},
			location: {},
			weather: {},
		});
	};

	initApp = async () => {
		this.cleanState();
		this.getDate();
		await this.getLocation();
		await this.getWeather(this.state.location.lat, this.state.location.long);

	};

	componentDidMount() {

		this.initApp();

	};

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
						units: newUnits,
					}
				}
			}
		});
	};

	render () {

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
						weatherContent={details || weather.weatherError}
						weatherDetails={details}
						error={weather.weatherError}
						tempSwitch={() => this.tempUnitsSwitcher(details.temp.value, details.temp.units)}
						reload={this.initApp}/>

			</Fragment>
		);
	}

}

export default Home;
