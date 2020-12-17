// eslint-disable-next-line prettier/prettier
import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://s.gravatar.com/avatar/c789ab7054d59ff8ee3aaf291c4bcd61?s=80" alt="Avatar" />
          <h1>
            Daniel <br></br> Zurita
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>FrontEnd Engineer</h3>
          <div>@DanielZurita</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
