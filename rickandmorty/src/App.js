import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  Switch,
  withRouter,
} from "react-router-dom";
import Characters from "./characters";
import CharacterDetails from "./characterdetails";

function App() {
  return (
    <div className="container">
      <Router>
        <ul></ul>
        <Switch>
          <Route exact path="/characters" component={Characters} />
          <Route path="/characters/:id" component={CharacterDetails} />
        </Switch>
        <li>
          <Link to="/characters">Return to Main Page</Link>
        </li>
      </Router>
    </div>
  );
}

export default App;
