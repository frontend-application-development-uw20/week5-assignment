
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import GitUser from './gitUser';
import Movie from './movieapi';
import Covid19 from './covid19api';
import Covid19country from './covid19country';
import NotFound from './NotFound';
import MovieDetail from './movieDetail';
import Stock from './stockapi';

// const Home = () => (
//   <h1>Home</h1>
// )

const Links = () => (
  <ul>
    <li><NavLink exact to="/">Stock</NavLink></li>
    <li><NavLink to="/covid19">Covid19</NavLink></li>
    <li><NavLink to="/movie">Movie</NavLink></li>
    <li><NavLink to="/user">User</NavLink></li>
  </ul>
);

function App() {
  return (
    <div className="App">
      <Router>
        <header> <Links /></header>
        <Switch>
          <Route exact path="/" component={Stock} />
          <Route exact path="/covid19" component={Covid19} />
          <Route exact path="/covid19/:CountryName/:CountryCode" component={Covid19country} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/movie/:imdbID" component={MovieDetail} />
          <Route exact path="/user" component={GitUser} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
