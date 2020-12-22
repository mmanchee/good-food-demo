import React from 'react';
import PropTypes from 'prop-types';

const Diet = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Diet</p>
        <table>
          <tr>
            <td className='table-width1' >Current Weight</td>
            <td className='table-width2' ><input className='table-input' type='number' placeholder='Enter Weight' /></td>
          </tr>
          <tr>
            <td>Height</td>
            <td><input className='table-input' type='number' placeholder='Enter Height in Inches' /></td>
          </tr>
          <tr>
            <td>Age</td>
            <td><input className='table-input' type='number' placeholder='Enter Age' /></td>
          </tr>
          <tr>
            <td>Gender</td>
            <td><input className='table-input' type='number' placeholder='Enter Gender' /></td>
          </tr>
          <tr>
            <td>Desired Weight</td>
            <td><input className='table-input' type='number' placeholder='Enter Desired Weight' /></td>
          </tr>
        </table>
        <p>Output to display a diet schedule and other statistics</p>
      
      <div className='centering'>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Account') }>Back</button>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Account') }>Submit</button>
      </div>
    </React.Fragment>
  )
}

Diet.propType = {
  onChangePage: PropTypes.func
}

export default Diet;