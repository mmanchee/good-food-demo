import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainControl from './MainControl';

function App() {
  return (
    <React.Fragment>
      <div id='container'>
        <div id='header'>
          <Header />
        </div>      
        <div id='spacing'>
          <MainControl />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
