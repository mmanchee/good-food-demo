import React from 'react';

const MainControl = () => {
  const [page, setPage] = useState('MainMenu')

  const changePage = newPage => {
    setPage(newPage);
  }

  let currentVisibleState = null;
  
  switch (page) {
    case 'MainMenu':
      return currentVisibleState = <MainMenu onChangePage = {this.changePage}/>
    case 'Login':
      return currentVisibleState = <Login onChangePage = {this.changePage}/>
    case 'Register':
      return currentVisibleState = <Register onChangePage = {this.changePage}/>
    case 'Login':
      return currentVisibleState = <Login onChangePage = {this.changePage}/>
    case 'Login':
      return currentVisibleState = <Login onChangePage = {this.changePage}/>
    default:
      return currentVisibleState = <Landing onChangePage = {this.changePage}/>
  }
  return (
    <React.Fragment>
      {currentVisibleState}
    </React.Fragment>
  )
}

export default MainControl;