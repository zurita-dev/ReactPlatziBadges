// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';

// const element = <h1>Hello, Platzi Badges!</h1>;
// creamos los elementos sin jsx, y sin propiedades
// const element = React.createElement('h1',{},'Hola, soy un children');

// agregando propiedades al objeto
// const element = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a platzi');

const nombre = 'daniel';
// usando datos, sin jsx
// const element = React.createElement('h1', { }, `Hola, soy ${nombre}`);

//usando datos con jsx
// se evaluan expresiones, si no tiene valor, queda vacio;
// const element = <h1>Hola {nombre}</h1>

const element = (
  <div>
   <Badge></Badge>
  </div>
);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
