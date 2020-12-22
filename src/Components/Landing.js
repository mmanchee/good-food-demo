import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../img/GoodFoodLogo.png'

const Landing = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Landing</p>
      <div id='landing'>
        <img id='logo-img' src={Logo} alt='good food logo'/>
        <br />    
        <button className='btn btn-info mr-2' onClick = { () => onChangePage('Login') }>Login</button>
        <button className='btn btn-info ml-2' onClick = { () => onChangePage('Register') }>Register</button>
      </div>
      
    </React.Fragment>
  )
}

Landing.propType = {
  onChangePage: PropTypes.func
}

export default Landing;