import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <div className="row">
                <div className="col-md-3">
                  <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="logo persona"></img>
                </div>
                <div className="col-md-9">
                  <h5>
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <h5 style={{ color: '#00acee' }}>@{badge.twitter}</h5>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
