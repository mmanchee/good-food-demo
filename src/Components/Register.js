import React from 'react';
import PropTypes from 'prop-types';

const Register = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Register</p>
      <button onClick = { () => onChangePage('Landing') }>Landing</button>

    </React.Fragment>
  )
}

Register.propType = {
  onChangePage: PropTypes.func
}

export default Register;