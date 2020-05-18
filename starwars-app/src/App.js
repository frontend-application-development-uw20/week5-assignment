import React from "react";
import './App.css';
import Links from './Links';
import Routes from './Routes';
import Character from './Character';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
return (
    <Router>
      <div>
        <nav>
          <Links />
        </nav>
          {/* <Routes /> */}
          <b>{Character.getCharDetail("Leia")}</b>
      </div>
    </Router>
  );
}

