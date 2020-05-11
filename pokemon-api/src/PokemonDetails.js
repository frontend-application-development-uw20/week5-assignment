import React from 'react';
import pikachu from './pikachu.svg';

export default class PokemonDetails extends React.Component {
  state = {
    isLoading: true,
    details: [],
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
          <div>
            <p>Abilities:</p>
            <ul>
              {this.state.details.abilities.map(ability =>
              <li key={ability.ability.name}>{ability.ability.name}</li>)}
            </ul>
          </div>
          <div>
            <p>Type:</p>
            <ul>
              {this.state.details.types.map(type =>
              <li key={type.type.name}>{type.type.name}</li>)}
            </ul>
          </div>
          <div>
            <p>Image:</p>
            <img src={this.state.details.sprites.front_default} alt={this.state.details.name}/>
          </div>
        </div>
      </div>;
  }

  render() {
    return (
      <div>{this.PokemonDetailContents()}</div>
    )
  };
}

