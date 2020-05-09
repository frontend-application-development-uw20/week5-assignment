import React from 'react';
import pikachu from './pikachu.svg';

export default class PokemonDetails extends React.Component {
  state = {
    isLoading: true,
    details: [],
    errorMessage: '',
  };

  componentDidMount() {
    const {name} = this.props.match.params;
      fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => this.setState({
          details: data,
          isLoading: false
        }));
  }

  PokemonDetailContents = () => {
    return this.state.isLoading
     ? <div className='isLoading'><img src={pikachu} className='Loading-logo' alt='loading-logo' /> Loading...</div>
     : <div>
       <h1>{this.state.details.name}</h1>
       <div>
        <p>Base Experience: {this.state.details.base_experience}</p>
        <p>Height: {this.state.details.height}</p>
        <p>Weight: {this.state.details.weight}</p>
      </div>
      </div>;
  }

  render() {
    return (
      <div>{this.PokemonDetailContents()}</div>
    )
  };
}

