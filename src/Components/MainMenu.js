import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = (props) => {
  const { onChangePage } = props;


  return (
    <React.Fragment>
      <p>MainMenu</p>
      <button onClick = { () => onChangePage('Account') }>Account</button>

    </React.Fragment>
  )
}

MainMenu.propType = {
  onChangePage: PropTypes.func
}

export default MainMenu;