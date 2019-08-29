import React from 'react';
import '../styles/containerStyles/App.scss';
import Cart from '../components/Cart';
import NavBar from '../components/NavBar';

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>   
      <div className="MainContentArea">
      <Cart />
      </div>
    </div>
    
  );
}

export default App;
