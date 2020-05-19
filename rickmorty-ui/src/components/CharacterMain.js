import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './CharacterMain.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterSearch from './CharacterSearch';

function CharacterMain() {
  return ( 
    <div id="container-character-main">  
      <Router>
        <header>
          <nav className="nav-header">
            <div className="nav-header-link"><Link to="/">Home</Link></div>
            <div className="nav-header-link"><Link to="/character/search">Search</Link></div>
          </nav>
          <h1>Rick and Morty</h1>
        </header>

        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/character/search" component={CharacterSearch} />
          <Route path="/character/:id" component={CharacterDetail} />
          
          {/* <Route path="*" component={NotFound}></Route> */}
        </Switch>
      </Router>  

      <footer>
        <div>Front-end Application Development - Homework 4</div>
      </footer>
    </div>
  );
}

export default CharacterMain;