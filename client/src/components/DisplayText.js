import React, { Component } from 'react';
import axios from 'axios';

const SingleTextDisplay = props => (
  <tr>
    <td>{props.text.username}</td>
    <td>{props.text.desc}</td>
    <td>
  | <a href="#" onClick={() => { props.deletetext(props.text._id) }}>delete</a>
    </td>
  </tr>
)

export default class TextList extends Component {
  constructor(props) {
    super(props);

    this.deletetext = this.deletetext.bind(this)

    this.state = {texts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/texts/')
      .then(response => {
        this.setState({ texts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletetext(id) {
    axios.delete('http://localhost:5000/texts/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      texts: this.state.texts.filter(el => el._id !== id)
    })
  }

  textList() {
    return this.state.texts.map(currenttext => {
      return <SingleTextDisplay text={currenttext} deletetext={this.deletetext} key={currenttext._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged texts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.textList() }
          </tbody>
        </table>
      </div>
    )
  }
}