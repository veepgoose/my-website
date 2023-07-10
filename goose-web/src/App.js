import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav Bar/NavBar.js';
import NameTitle from './NameTitle.png';

function App() {
  return (
    <div className="App">
      <NavBar className="App-header"/>
      <header className="Header">

      <body className="App-body">
      {/* <h1 className="Header-text">VICTORIA PLATT</h1> */}
       <img src={NameTitle} className="NameTitle" alt="Name" />
       <p className="Header-text">ACTOR</p>
      </body>
      
      </header>
    </div>
  );
}

export default App;
