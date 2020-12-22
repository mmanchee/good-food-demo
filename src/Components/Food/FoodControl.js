import React, { useState } from 'react';
import FoodList from './FoodList';

const FoodControl = () => {
  const [foodPage, setFoodPage] = useState('Landing')

  const changeFoodPage = newFoodPage => {
    setFoodPage(newFoodPage);
  }

  let currentVisibleState = null;

  switch (foodPage) {
    case 'FoodList':
      currentVisibleState = <FoodList onChangeFoodPage = {changeFoodPage}/>
      break;
    default:
      currentVisibleState = null
  }
  return (
    <React.Fragment>
      {currentVisibleState}
    </React.Fragment>
  )
}

export default FoodControl;