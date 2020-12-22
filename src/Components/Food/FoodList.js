import React from 'react';
import PropTypes from 'prop-types';

const FoodList = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>FoodList</p>
    </React.Fragment>
  )
}

FoodList.propType = {
  onChangePage: PropTypes.func
}

export default FoodList;