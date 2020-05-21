import React from "react";

export default class Films extends React.Component {
  render() {
    if (this.props.d === null || this.props.d.length === 0) {
      return null;
    } else {
      const vehicles = this.props.d;
      return (
        <>
          <p>
            {this.props.person.name} is known for driving{" "}
            {vehicles.length > 1 ? `${vehicles.length} vehicles` : " a vehicle"}
            :
          </p>
          <ul>
            {vehicles.map((f, i) => {
              return <li key={i}>{f.name}</li>;
            })}
          </ul>
        </>
      );
    }
  }
}
