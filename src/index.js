import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// import Badge from './components/Badge';
import Badges from './pages/Badges';

import './global.css';
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(<Badges></Badges>, container);
