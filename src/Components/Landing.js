import React from 'react';
import PropTypes from 'prop-types';

const Landing = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Landing</p>
      <button onClick = { () => onChangePage('Login') }>Login</button>

    </React.Fragment>
  )
}

Landing.propType = {
  onChangePage: PropTypes.func
}

export default Landing;