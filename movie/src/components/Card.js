import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    return (
      <CardElement>
        <CardImg src={this.props.img} alt={this.props.title}></CardImg>
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
