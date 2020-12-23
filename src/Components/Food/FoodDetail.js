import React from 'react';
import PropTypes from 'prop-types';

const FoodDetail = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>FoodDetail</p>
      <div className='box'>
        <div className='inner-box'>
          <table>
            <tr>
              <td>Name:</td>
              <td>SQUASH</td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>VEG</td>
            </tr>
            <tr>
              <td>Sub-Category:</td>
              <td>FRUIT</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>SQUASH,ZUCCHINI,BABY,RAW</td>
            </tr>
            <tr>
              <td>Caffeine</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Egg:</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Fish:</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>FODMAP</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Fructose</td>
              <td className='mod'>Moderate</td>
            </tr>
            <tr>
              <td>Gluten</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Histamine</td>
              <td className='low'>Low</td>
            </tr>
            <tr>
              <td>Lactose</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Lectin</td>
              <td className='high'>High</td>
            </tr>
            <tr>
              <td>Legume</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Oxalate</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Salicylates</td>
              <td className='high'>High</td>
            </tr>
            <tr>
              <td>Shellfish</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Soy</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Sulfate</td>
              <td className='none'>n/a</td>
            </tr>
            <tr>
              <td>Tryamine</td>
              <td className='low'>Low</td>
            </tr>
          </table>
        </div>
      </div>
      <div className='centering'>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('FoodMenu') }>FoodMenu</button>
        <button className='btn btn-info landing-btn' >Nutrition</button>
      </div>
    </React.Fragment>
  )
}

FoodDetail.propType = {
  onChangePage: PropTypes.func
}

export default FoodDetail;