import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class HomeList extends React.Component {
  render() {
    const char = this.props.list.sort((a, b) => (a.name > b.name ? 1 : -1));

    const CharacterDisplay = (a) => {
      const urlString = a.data.name.toLowerCase().replace(/ /gi, "-");
      return (
        <div className="characterToggle col-sm-6 col-md-4 col-lg-3 col-xl-3 characters">
          <Link to={`/character/${urlString}`}>{a.data.name}</Link>
        </div>
      );
    };

    return (
      <>
        <div className="row justify-content-center">
          <h2 className="col-md-6 col-lg-6 col-xl-6">
            Choose a character from the Star Wars universe
          </h2>
        </div>

        <div className="row">
          {this.props.loading === true ? (
            <div className="spinner-border page-centered"></div>
          ) : (
            char.map((a, i) => <CharacterDisplay key={i + 1} data={a} />)
          )}
        </div>
      </>
    );
  }
}
