import React from 'react';

import Button from "components/UI/Button/Button";

const reload = (props) => {

	const { reload } = props;

	return <Button className="ml-auto mr-auto mt-3 btn-success"
				   type="submit"
				   clicked={reload}>Reload Weather</Button>

};

export default reload;
