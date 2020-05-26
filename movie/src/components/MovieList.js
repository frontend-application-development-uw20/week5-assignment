import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=f95be5bf&t=a`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          // this.setState({
          //   isLoaded: true,
          //   items: result
          // });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    return (
      <React.Fragment>
      <p>{this.state.items}</p>
      </React.Fragment>
    );
  }
}
