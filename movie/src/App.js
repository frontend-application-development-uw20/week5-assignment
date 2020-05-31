import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
// import Default from "./components/Default";
import Details from "./components/Details";
import { defaultMovies } from "./data";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: defaultMovies,
    res: [],
    detailMovie: null
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

  handleDetail = (movie) => {
    this.setState(() => {
      return { detailMovie: movie };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar onClick={this.handleSubmit} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <MovieList {...props} items={this.state.res} handleDetail={this.handleDetail}/>}
          />
          <Route path="/details" render={(props) => <Details {...props} movie={this.state.detailMovie}/>}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
