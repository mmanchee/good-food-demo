import React from 'react';

class MainControl extends React.Component {

  render() {
    let currentVisibleState = <p>Hello World</p>
    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>
    )
  }
}

export default MainControl;