import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default class Page404 extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <h2 className="col-md-6 col-lg-6 col-xl-6">
          These are not the characters you are looking for
        </h2>
        <div id="return404">
          <Link to={`/`}>
            The force is not with you. Return to the list of characters
          </Link>
        </div>
      </div>
    );
  }
}
