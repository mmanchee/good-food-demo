import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Login</p>
      <input type='email' placeholder='Enter Email' /><br />
      <input type='password' placeholder='Enter Password' /><br />
      <button className='btn btn-info' onClick = { () => onChangePage('MainMenu') }>Login</button>
    </React.Fragment>
  )
}

Login.propType = {
  onChangePage: PropTypes.func
}

export default Login;