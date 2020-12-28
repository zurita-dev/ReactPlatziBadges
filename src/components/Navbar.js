import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo"></img>
            <span className="font-weigth-ligth">Platzi</span>
            <span className="font-weigth-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
