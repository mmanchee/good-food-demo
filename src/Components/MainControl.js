import React, { useState } from 'react';
import Landing from './Landing';
import MainMenu from './MainMenu';
import Login from './Account/Login';
import Register from './Account/Register';
import Account from './Account/Account';

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