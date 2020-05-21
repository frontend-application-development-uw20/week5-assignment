import React from "react";

export default class Films extends React.Component {
  render() {
    if (this.props.d === null || this.props.d.length === 0) {
      return null;
    } else {
      const starships = this.props.d;
      return (
        <>
          <p>
            {this.props.person.name} is known for piloting{" "}
            {starships.length > 1
              ? `${starships.length} starships`
              : " a starship"}
            :
          </p>
          <ul>
            {starships.map((f, i) => {
              return <li key={i}>{f.name}</li>;
            })}
          </ul>
        </>
      );
    }
  }
}
