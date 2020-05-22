import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Characters from './Characters.js';
import CharacterPage from './CharacterPage.js';

const Home = (props) => {
  return (
    <div>
      This is the home page
    </div>
  );
}

const WrappedHome = withRouter(Home);

function App() {
  return (
    <div className="App">
      <Router>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/characters">Characters</Link></p>
        <Switch>
          <Route exact path="/characters" component={Characters} />
          <Route path="/characters/:id" component={CharacterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
