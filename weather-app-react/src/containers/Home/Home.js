import React, { Component, Fragment } from 'react';

import Date from 'components/Date/Date';

class Home extends Component{

	state = {
		date: null
	};

	render() {

		return(
			<Fragment>

				<Date day={27}
					month={`Feb`}
					year={2018}/>

			</Fragment>
		);
	}

}

export default Home;
