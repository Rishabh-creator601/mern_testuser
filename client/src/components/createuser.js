import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: ''
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className='container'>
        <u><h3>Create New User</h3></u>
        <form onSubmit={this.onSubmit}>
          <div className="form-group my-3"> 
         <b>  <label>Enter Username :</label></b> 
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangename}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}