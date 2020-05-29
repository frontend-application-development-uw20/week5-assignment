import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { MainContainer } from "./MainContainer";
import Card from "./Card";

export default class MovieList extends Component {
  render() {
    return (
      <MainContainer>
        {this.props.items.map((item) => (
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
