import React from 'react';
import platiNautas from '../images/astronauts.svg';
import logoConf from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="col-4 Home__col">
        <img src={logoConf} alt="logo conf" />
        <h1 className="mt-3">PRINT YOUR BADGES</h1>
        <p className="mt-2">The easiest way to manage your conference</p>
        <Link to="/badges">
          <button className="btn btn-primary" type="button">
            Start now
          </button>
        </Link>
      </div>
      <div className="col-8 Home__col">
        <img src={platiNautas} alt="Platzinautas logo" />
      </div>
    </div>
  );
}

export default Home;
