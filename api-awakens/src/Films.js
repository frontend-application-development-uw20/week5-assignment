import React from "react";

export default class Films extends React.Component {
  render() {
    if (this.props.d === null || this.props.d.length === 0) {
      return null;
    } else {
      const films = this.props.d.sort((a, b) =>
        a.episode_id > b.episode_id ? 1 : -1
      );
      return (
        <>
          <p>
            {this.props.person.name} appears in {films.length} of the first 7
            Star Wars films:
          </p>
          <ul>
            {films.map((f) => {
              return (
                <li key={f.episode_id}>
                  Episode {f.episode_id}: {f.title}
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  }
}
