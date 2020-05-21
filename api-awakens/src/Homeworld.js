import React from "react";

export default class Homeworld extends React.Component {
  render() {
    if (this.props.d === null || this.props.d.length === 0) {
      return null;
    } else {
      return (
        <p>
          {this.props.s.length !== 0 ? `A ${this.props.s[0].name}, ` : null}{" "}
          {this.props.person.name} comes from the {this.props.d.terrain} world
          of {this.props.d.name}.
        </p>
      );
    }
  }
}
