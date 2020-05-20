import React from "react";
import './App.css';
import Routing from './Routing';

import {
  BrowserRouter as Router,
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
          <Routing />
      </div>
    </Router>
  );
}

