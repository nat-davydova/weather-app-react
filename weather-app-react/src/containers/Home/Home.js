import React, { Component, Fragment } from 'react';

import CurrentDate from 'components/CurrentDate/Date';

class Home extends Component{

	constructor(props) {

		super(props);

		this.state = {
			fullDate: new Date(),
		};
	}

	dateTimeHandler = () => {

		const day = this.state.fullDate.getDate();

		this.setState({
			currentDate: {
				day: day
			}
		});

		console.log(this.state);

	};

	componentDidMount() {
		this.dateTimeHandler();
	}

	render() {

		return(
			<Fragment>

				<CurrentDate day={27}
					month={`Feb`}
					year={2018}/>

			</Fragment>
		);
	}

}

export default Home;
