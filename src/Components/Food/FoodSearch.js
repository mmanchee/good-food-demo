import React from 'react';
import PropTypes from 'prop-types';

const FoodSearch = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>FoodSearch</p>
      <div className='centering'>
        <input className='std-input' type='text' placeholder='Enter a Food' /><br />
        <button className='btn btn-info' onClick = { () => onChangePage('FoodSearch') }>Search</button>
      </div>
      <div className='box'>
        <div className='inner-box'>
          <p>Reports back food that meets search</p>
          <button className='btn btn-info' onClick = { () => onChangePage('FoodDetail') }>Detail</button>
        </div>
      </div>
    </React.Fragment>
  )
}

FoodSearch.propType = {
  onChangePage: PropTypes.func
}

export default FoodSearch;