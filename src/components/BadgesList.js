import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar" />
                  {/* <img className="" src={badge.avatarUrl} alt="logo persona"></img> */}
                </div>
                <div className="col-md-9 col-sm-9">
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
