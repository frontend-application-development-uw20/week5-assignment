import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <CardElement onClick={() => this.props.handleDetail(this.props.movie)}>
        <Link to="/details">
          <CardImg
            src={this.props.movie.Poster}
            alt={this.props.movie.Title}
          ></CardImg>
        </Link>
      </CardElement>
    );
  }
}

const CardElement = styled.div`
  border: 1px solid Black;
  border-radius: 10px;
  width: 30%;
  margin: 0.3rem;
  text-align: center;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
`;
