import React, { Component } from "react";
import { MainContainer } from "./MainContainer";
import Card from "./Card";

export default class MovieList extends Component {
  render() {
    return (
      <MainContainer>
        {this.props.items.map((item) => (
          <Card
            key={item.Title}
            movie={item}
            handleDetail={this.props.handleDetail}
          />
        ))}
      </MainContainer>
    );
  }
}
