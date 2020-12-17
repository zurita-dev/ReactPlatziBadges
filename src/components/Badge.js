// eslint-disable-next-line prettier/prettier
import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Daniel <br></br> Zurita
          </h1>
        </div>
        <div>
          <p>FrontEnd Engineer</p>
          <p>@DanielZurita</p>
        </div>
      </div>
    );
  }
}

export default Badge;
