import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { MainContainer } from "./MainContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      title: "",
      year: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.title);
    if (this.state.title === "") {
      event.preventDefault();
    }
    return (
      <Redirect
        to={{
          pathname: "/",
          title: this.state.title,
          year: this.state.year
        }}
      />
    );
  }

  handleYear(event) {
    this.setState({ title: event.target.value });
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <NavWrapper>
        <MainContainer>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
          <FormGroup>
            <Label>Title:</Label>
            <Input
              type="text"
              value={this.state.title}
              onChange={this.handleYear}
            />
          </FormGroup>

          <FormGroup>
            <Label>Year:</Label>
            <Input
              type="text"
              value={this.state.year}
              onChange={this.handleYear}
            />
          </FormGroup>

          <Button onClick={this.handleSubmit}>Submit</Button>
        </MainContainer>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainDark);
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 0.25rem;
  border: 4px solid palevioletred;
  color: palevioletred;
  font-size: 1rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    border: 4px solid var(--mainYellow);
    color: var(--mainYellow);
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0;
  display: inline-block;
  color: white;
`;

const Input = styled.input`
padding: 0.375rem 0.75rem;
font-size: 1rem;
border: 1px solid #ced4da;
border-radius: 0.25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
:focus {
  outline-offset: -2px;
  0 0 0 0.2rem rgba(0,123,255,.25)
}
`;

const FormGroup = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
`;
