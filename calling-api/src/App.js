
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
    <li><Link to="/">Stock</Link></li>
    <li><Link to="/covid19">Covid19</Link></li>
    <li><Link to="/movie">Movie</Link></li>
    <li><Link to="/user">User</Link></li>
  </ul>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Links />
        <Switch>
          <Route exact path="/" component={Stock} />
          <Route exact path="/covid19" component={Covid19} />
          <Route exact path="/covid19/:CountryName" component={Covid19country} />
          <Route exact path="/movie" component={Movie} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route exact path="/user" component={GitUser} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
