import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../img/GoodFoodLogo.png'

const Landing = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Landing</p>
      <div className='centering'>
        <img id='logo-img' src={Logo} alt='good food logo'/>
        <br />    
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Login') }>Login</button>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Register') }>Register</button>
      </div>
    </React.Fragment>
  )
}

Landing.propType = {
  onChangePage: PropTypes.func
}

export default Landing;