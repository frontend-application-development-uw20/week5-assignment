import React from 'react';
import { Link } from 'react-router-dom';

export default class People extends React.Component {
  state = { people: [] };

  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => this.setState({ people: data.results }));
  }

  render() {
    console.log(this.state.people);
    return (
      <div>
        <h1 className="header">Star Wars Characters</h1>
          <ul>
            {this.state.people.map((person, id) => (
              <li key={id} className="people">
                <Link to={`/people/${id}`}>
                  {person.name}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    )
  }
}
