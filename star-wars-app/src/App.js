import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import People from './People.js';
import PersonDetails from './PersonDetails.js';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact component={People} />
          <Route path="/about" component={About} />
          <Route path="/people/:id" component={PersonDetails} />
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2>Version 1.0 of Star Wars Character App</h2>;
}

export default App;
