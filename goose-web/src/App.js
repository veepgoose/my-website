import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav Bar/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar className="App-header"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Why is React so FUCKING hard?</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fuck React
        </a>
      </header>
    </div>
  );
}

export default App;
