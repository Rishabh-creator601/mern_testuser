import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Textis</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>

          <li className="navbar-item">
          <Link to="/texts" className="nav-link">Add Text</Link>
          </li>

        </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar