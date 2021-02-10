import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);
  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}
function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            name="filter"
            id="filter"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          name="filter"
          id="filter"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <Gravatar
                      className="BadgesListItem__avatar"
                      email={badge.email}
                      alt="Avatar"
                    />
                    {/* <img className="" src={badge.avatarUrl} alt="logo persona"></img> */}
                  </div>
                  <div className="col-md-9 col-sm-9">
                    <h5>
                      {badge.firstName} {badge.lastName}
                    </h5>
                    <h5 style={{ color: "#00acee" }}>@{badge.twitter}</h5>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
