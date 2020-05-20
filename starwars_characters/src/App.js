import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

const NotFound = () => <div>404</div>

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/characterDetails/:idx" component={CharacterDetails} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
