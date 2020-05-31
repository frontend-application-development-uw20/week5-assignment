import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { MainContainer } from "./MainContainer";

export default class Details extends Component {
  render() {
    if (!this.props.movie) {
      return <Redirect to="/" />;
    } else {
      const { Title, Released, Poster, Runtime } = this.props.movie;
      return (
        <MainContainer>
          <Layout>
            <MoviePoster src={Poster} alt={Title}></MoviePoster>
            <MovieDetails>
              <h1>{Title}</h1>
              <h2>{Released}</h2>
              <h2>{Runtime}</h2>
            </MovieDetails>
          </Layout>
        </MainContainer>
      );
    }
  }
}

const Layout = styled.section`
  display: flex;
  margin: 2rem 0 0 0;
  justify-content: space-between;
  width: 100%;
`;

const MoviePoster = styled.img`
  width: 50%;
`;

const MovieDetails = styled.section`
  width: 40%;
`;
