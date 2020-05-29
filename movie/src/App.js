import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
// import Default from "./components/Default";
// import Details from "./components/Details";
import { defaultMovies } from "./data";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: defaultMovies,
    res: [],
  };

  componentDidMount() {
    this.state.items.forEach((item) =>
      fetch(`http://www.omdbapi.com/?apikey=f95be5bf&t=${item.title}`)
        .then((res) => res.json())
        .then((response) =>
          this.setState((prev) => ({
            res: [...prev.res, response],
          }))
        )
    );
  }

  handleSubmit(event) {
    if (this.state.title === "") {
      event.preventDefault();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar onClick={this.handleSubmit} />
        <MovieList items={this.state.res} />
      </React.Fragment>
    );
  }
}

export default App;
