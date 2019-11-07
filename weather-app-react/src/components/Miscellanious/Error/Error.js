import React from 'react';
import PropTypes from 'prop-types';

const error = ({ errorText }) => <div className="text-danger">{errorText}</div>;

error.propTypes = {
	errorText: PropTypes.string,
};

export default error;
