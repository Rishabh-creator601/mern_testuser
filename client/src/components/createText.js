import React, { Component } from 'react';
import axios from 'axios';

 class CreateText extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangedesc = this.onChangedesc.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        desc: '',
        users: []
      }
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/users')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.name),
              username: response.data[0].name
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
  
    onChangedesc(e) {
      this.setState({
        desc: e.target.value
      })
    }

  
    onSubmit(e) {
      e.preventDefault();
  
      const textdata = {
        username: this.state.username,
        desc: this.state.desc
      }
  
      console.log(textdata);
  
      axios.post('http://localhost:5000/texts/add', textdata)
        .then(res => console.log(res.data));
  
      alert("Text added")
    }
  
    render() {
      return (
      <div className='container'>
        <h3>Add Text </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group my-3"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group my-3"> 
            <label>Description : </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.desc}
                onChange={this.onChangedesc}
                />
          </div>

  
          <div className="form-group">
            <input type="submit" value="Add Text" className="btn btn-primary" />
          </div>
        </form>
      </div>
      )
    }
  }


  export default CreateText;