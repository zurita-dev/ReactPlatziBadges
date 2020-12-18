import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

import './global.css';
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(
  //   <Badge
  //     firstName="Danielito"
  //     secondName="Zurita"
  //     jobTitle="FrontEnd Engineer"
  //     twitter="Daniel"
  //     avatarUrl="https://s.gravatar.com/avatar/c789ab7054d59ff8ee3aaf291c4bcd61?s=80"
  //   ></Badge>,
  <BadgeNew></BadgeNew>,
  container
);
