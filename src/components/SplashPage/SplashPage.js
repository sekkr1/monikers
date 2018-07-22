import React from 'react';
import { NavLink } from 'react-router-dom';
import logolockup from '../../assets/Monikers_logo_lockup-02.svg';
import './SplashPage.css';

const SplashPage = () => {
  return (
    <div className="splash-page">
      <img className="logo-lockup" src={logolockup}/>
      <div className="button-wrapper" >
        <button className="start-game-button">
          <NavLink className="navlink" to="/setup">NEW GAME</NavLink>
        </button>
        <button className="instructions-button">
          <NavLink className="navlink" to="/instructions">INSTRUCTIONS</NavLink>
        </button>
      </div>
    </div>
  );
};

export default SplashPage;
