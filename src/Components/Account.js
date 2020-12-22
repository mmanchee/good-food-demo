import React from 'react';
import PropTypes from 'prop-types';

const Account = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Account</p>
      <button onClick = { () => onChangePage('Chart') }>Chart</button>

    </React.Fragment>
  )
}

Account.propType = {
  onChangePage: PropTypes.func
}

export default Account;