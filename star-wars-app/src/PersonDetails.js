import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default class PersonDetails extends React.Component {
  state = {details: {} };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://swapi.dev/api/people/${parseInt(id) + 1}`)
    .then(res => res.json())
    .then(data => this.setState({ details: data }));
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        <h1 className='header'>
          {details.name}
        </h1>
        <ul className="people">
          Birth Year: {details.birth_year}
        </ul>
        <ul className="people">
          Height: {details.height} cm
        </ul>
        <ul className="people">
          Weight: {details.mass} kg
        </ul>
        <ul className="people">
          Gender: {details.gender}
        </ul>
      </div>
    )
  }
}

