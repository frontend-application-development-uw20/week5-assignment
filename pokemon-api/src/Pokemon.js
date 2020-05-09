import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import pikachu from './pikachu.svg';

export default class Pokemon extends React.Component {
  state = {
    isLoading: false,
    pokemons: [],
    errorMessage: '',
  }

  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/?limit=18')
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results }));
  }

  // LoadSpinner = () => {
  //   return this.state.isLoading
  //     ? <div className='isLoading'><img src={pikachu} className='Loading-logo' alt='loading-logo' /> Loading...</div>
  //     : <div>isloading false</div>;
  // }
  // <div>{this.LoadSpinner()}</div>

  render() {
    return (
      <div>
        <h1>Catch a Pokemon!</h1>
        <Grid container spacing={3}>
          {this.state.pokemons.map(pokemon =>
            <Grid item xs={4} key={pokemon.name}>
              <h2>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </h2>
            </Grid>)}
        </Grid>
      </div>
    )
  };
}


