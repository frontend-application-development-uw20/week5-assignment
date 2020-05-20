import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './RickAndMorty.scss'
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Navigation from './Navigation';

function App() {
  return (
    <div className={'main-content-container'}>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/week5-assignment/" exact component={CharacterList} />
          <Route path="/week5-assignment/character/:id" exact component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
