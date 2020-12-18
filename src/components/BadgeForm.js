import React from 'react';

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
  };
  handleClick = () => {
    console.log('Button has pressed');
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario se envía');
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"></input>
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
