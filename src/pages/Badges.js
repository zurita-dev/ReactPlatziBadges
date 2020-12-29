import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log('1.- Constructor()');
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }
  componentDidMount() {
    console.log('3.- ComponentDidMount()');
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({ prevProps: prevProps, prevState: prevState });

    console.log({
      props: this.props,
      state: this.state,
    });
  }
  componentWillUnmount() {
    console.log('6.- componentWillUnmount');

    clearTimeout(this.setTimeOutId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    console.log('1.- Render()');
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges">
            <div className="Badges__container BadgesList">
              <BadgesList badges={this.state.data}></BadgesList>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
