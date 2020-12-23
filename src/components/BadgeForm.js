import React from 'react';

class BadgeForm extends React.Component {
  handleClick = () => {
    console.log('Button has pressed');
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.state :>> ', this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            ></input>
          </div>
          <div className="form-group">
            <label>Job Tittle</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTittle"
              value={this.props.formValues.jobTittle}
            ></input>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            ></input>
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
