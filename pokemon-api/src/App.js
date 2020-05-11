import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import pokeball from './pokemon.svg';
import './App.css';
import Pokemon from './Pokemon';
import Items from './Items';
import Games from './Games';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='header-content'>
          <img id='pokeball' src={pokeball} alt='Pokeball'/> Search them all!
          <button className='header-button'><Link style={{color: 'white'}} to="/">Home</Link></button>
          <button className='header-button'><Link style={{color: 'white'}} to="/pokemon">Pokemon</Link></button>
          <button className='header-button'><Link style={{color: 'white'}} to="/items">Items</Link></button>
          <button className='header-button'><Link style={{color: 'white'}} to="/games">Games</Link></button>
        </div>
        <Switch>
          <Route path="/pokemon" exact component={Pokemon} />
          <Route path="/pokemon/:name" component={PokemonDetails} />
          <Route path="/items" exact component={Items} />
          <Route path="/games" exact component={Games} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
