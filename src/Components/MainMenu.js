import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = (props) => {
  const { onChangePage } = props;


  return (
    <React.Fragment>
      <p>MainMenu</p>
      <div className="centering">
        <div id='main-menu-box'>
          <div className="centering">
            <p>Main Menu</p>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Food') }>Foods</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Event') }>Event</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Calendar') }>Calendar</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Account') }>Account</button>
          </div>
        </div>
      </div>
      

    </React.Fragment>
  )
}

MainMenu.propType = {
  onChangePage: PropTypes.func
}

export default MainMenu;