import React from 'react';
import PropTypes from 'prop-types';

const Account = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Account</p>
      <div className="centering">
        <div id='account-menu-box'>
          <div className="centering">
            <p>Profile</p>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Info') }>Info</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Chart') }>Chart</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Diet') }>Diet</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('MainMenu') }>Main Menu</button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

Account.propType = {
  onChangePage: PropTypes.func
}

export default Account;