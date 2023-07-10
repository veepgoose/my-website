import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav Bar/NavBar.js';
import NameTitle from './NameTitle.png';
import AboutMe from './Components/About Me/About.js';


function App() {
  return (
    <div className="App">
      <NavBar className="App-header"/>
      <header className="Header">

      <body className="App-body">
      {/* <h1 className="Header-text">VICTORIA PLATT</h1> */}
       <img src={NameTitle} className="NameTitle" alt="Name" />
       <AboutMe className="AboutMe"/>
       <p className="Header-text"></p>
      </body>
      
      </header>
    </div>
  );
}

export default App;
