import React from "react";
import './App.css';
import Links from './Links';
import Routes from './Routes.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export default function App() {
return (
    <Router>
      <div className='App'>
        <nav>
            <li>
              <span><Link to="/">Home</Link></span>
            </li>
        </nav>
            <Route exact path="/" component={Links} />
            <Routes />
      </div>
    </Router>
  );
}

