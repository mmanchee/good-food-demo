import React, { useState } from 'react';
import Landing from './Landing';
import MainMenu from './MainMenu';
import Login from './Account/Login';
import Register from './Account/Register';
import Account from './Account/Account';
import Info from './Account/Info';
import Chart from './Account/Chart';
import Diet from './Account/Diet';
import Food from './Food/FoodControl'

const MainControl = () => {
  const [page, setPage] = useState('Landing')

  const changePage = newPage => {
    setPage(newPage);
  }

  let currentVisibleState = null;

  switch (page) {
    case 'MainMenu':
      currentVisibleState = <MainMenu onChangePage = {changePage}/>
      break;
    case 'Login':
      currentVisibleState = <Login onChangePage = {changePage}/>
      break;
    case 'Register':
      currentVisibleState = <Register onChangePage = {changePage}/>
      break;
    case 'Account':
      currentVisibleState = <Account onChangePage = {changePage}/>
      break;
    case 'Info':
      currentVisibleState = <Info onChangePage = {changePage}/>
      break;
    case 'Chart':
      currentVisibleState = <Chart onChangePage = {changePage}/>
      break;
    case 'Diet':
      currentVisibleState = <Diet onChangePage = {changePage}/>
      break;
    case 'Food':
      currentVisibleState = <Food onChangePage = {changePage}/>
      break;
    default:
      currentVisibleState = <Landing onChangePage = {changePage}/>
  }
  return (
    <React.Fragment>
      {currentVisibleState}
    </React.Fragment>
  )
}

export default MainControl;