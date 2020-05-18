import React from "react";
import './App.css';
import Links from './Links';
import Routes from './Routes.js';
import Character from './Character.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
return (
    <Router>
      <div className='App'>
        <nav>
          <Links />
        </nav>
          <Routes />
      </div>
    </Router>
  );
}

