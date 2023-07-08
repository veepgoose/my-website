import React from 'react';
import './NavBar.css'
import VicProfile from './VicProfile.png'; 


function NavBar (props) {
    return (
      <div className="Nav-container">
      <header className={props.className}>
      <img src={VicProfile} alt="Victoria Platt - Profile Photo" className="VicProfile"/>
       
      </header>
      </div>
    );
  }
  
  export default NavBar; 