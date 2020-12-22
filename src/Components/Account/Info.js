import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Info</p>
      <p>Account information</p>
      <table>
        <tr>
          <td className='table-width1' >Name:</td>
          <td className='table-width2' >Kelly Smith</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>kellysmith@fakemail.com</td>
        </tr>
      </table>
      <div className='centering'>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Account') }>Back</button>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Account') }>Change Password</button>
      </div>
    </React.Fragment>
  )
}

Info.propType = {
  onChangePage: PropTypes.func
}

export default Info;