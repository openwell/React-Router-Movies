import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import uuid from 'uuid/v1'
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
         <Link key={uuid()} to=''> <span  className="saved-movie">{movie.title}</span> </Link>
        ))}
        <Link to='/' className="home-button">Home</Link>
      </div>
    );
  }
}
