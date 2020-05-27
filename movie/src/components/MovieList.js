import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultMovies } from "../data";
import { MainContainer } from "./MainContainer";
import Card from "./Card";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: "title" in props ? [props.title] : defaultMovies,
      res: [],
    };
  }

  componentDidMount() {
    this.state.items.forEach((item) =>
      fetch(`http://www.omdbapi.com/?apikey=f95be5bf&t=${item.title}`)
        .then((res) => res.json())
        .then((result) =>
          this.setState((state) => {
            const list = state.res.concat(result);
            return {
              res: list,
            };
          })
        )
    );
  }

  render() {
    return (
      <MainContainer>
        {this.state.res.map((item) => (
          <Card
            key={item.Title}
            img={item.Poster}
            title={item.Title}
            year={item.Year}
          />
        ))}
      </MainContainer>
    );
  }
}
