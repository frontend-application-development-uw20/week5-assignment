import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Loader from "react-loader-spinner";

export default class Characters extends React.Component {
  state = { characters: [], loading: true };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          characters: data.results,
          loading: false,
          error: false,
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : <h1>Rick and Morty Characters!</h1>}
        <ul>
          {this.state.characters.map((characters) => (
            <li key={characters.id}>
              <Link to={`/characters/${characters.id}`}>{characters.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
