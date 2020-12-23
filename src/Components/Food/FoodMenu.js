import React from 'react';
import PropTypes from 'prop-types';

const FoodMenu = (props) => {
  const { onChangePage } = props;


  return (
    <React.Fragment>
      <p>FoodMenu</p>
      <div className="centering">
        <div id='food-menu-box'>
          <div className="centering">
            <p>Food Menu</p>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('FoodList') }>Your Foods</button>
            <button className='btn btn-info menu-btn' onClick = { () => onChangePage('FoodSearch') }>Search Foods</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

FoodMenu.propType = {
  onChangePage: PropTypes.func
}

export default FoodMenu;