import React, { Fragment } from 'react';
import classnames from 'classnames';

import Error from 'components/Miscellanious/Error/Error';

const content = (props) => {

	const { location, error } = props;

	const locationClasses = classnames(
		`flex-shrink-0`,
		`ml-2`
	);

	return (

		<Fragment>

			{error && <Error errorText={error}/>}

			{location && <div className={locationClasses}>{location}</div>}

		</Fragment>
	);
};

export default content;
