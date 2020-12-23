import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTittle: '',
      twitter: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                secondName={this.state.form.lastName}
                jobTitle={this.state.form.jobTittle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/c789ab7054d59ff8ee3aaf291c4bcd61?s=80"
              ></Badge>
            </div>
            <div className="col">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}></BadgeForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
