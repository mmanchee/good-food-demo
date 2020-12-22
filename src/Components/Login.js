import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Login</p>
      <button onClick = { () => onChangePage('MainMenu') }>Main Menu</button>

    </React.Fragment>
  )
}

Login.propType = {
  onChangePage: PropTypes.func
}

export default Login;