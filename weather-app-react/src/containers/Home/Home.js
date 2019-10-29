import React, { Component, Fragment } from 'react';

import Date from 'components/Date/Date';

class Home extends Component{

	render() {

		return(
			<Fragment>

				<Date day={27}
					month={`Feb`}/>

			</Fragment>
		);
	}

}

export default Home;
