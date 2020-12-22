import React from 'react';
import PropTypes from 'prop-types';

const Register = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Register</p>
      <input type='email' placeholder='Enter Email' /><br />
      <input type='password' placeholder='Enter Password' /><br />
      <input type='text' placeholder='Enter Name' /><br />
      <input type='text' placeholder='Enter City' /><br />
      <button className='btn btn-info' onClick = { () => onChangePage('Landing') }>Register</button>
    </React.Fragment>
  )
}

Register.propType = {
  onChangePage: PropTypes.func
}

export default Register;