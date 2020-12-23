import React from 'react';
import PropTypes from 'prop-types';
import goodList from './SeedFoods';
import Food from './Food';

const FoodList = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>FoodList</p>
      <div className='box'>
        <div className='inner-box'>
          {goodList.map((food, index) =>
            <Food 
              name={food.name}
              description={food.description}
              category={food.category}
              subcat={food.subCat}
              id={index}
            />
          )}
        </div>
      </div>
      <div className='centering'>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('FoodMenu') }>Food Menu</button>
      </div>
    </React.Fragment>
  )
}

FoodList.propType = {
  onChangePage: PropTypes.func
}

export default FoodList;