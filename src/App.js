import React from 'react';
import Home from './pages/Home';
import Single from './pages/Single';
import Favorites from './pages/Favorites';
import Error from './pages/Error';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

//Orignially tried to use the browserRouter, but ran into issues when deploying
class App extends React.Component {
  render() {
    return(
      <Router basename="/week5-assignment/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hero/:heroId" component={Single} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    )
  }
}

export default App;