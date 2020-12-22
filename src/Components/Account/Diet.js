import React from 'react';
import PropTypes from 'prop-types';

const Account = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Account</p>
      <button className='btn btn-info menu-btn' onClick = { () => onChangePage('Diet') }>Diet</button>
      

    </React.Fragment>
  )
}

Account.propType = {
  onChangePage: PropTypes.func
}

export default Account;