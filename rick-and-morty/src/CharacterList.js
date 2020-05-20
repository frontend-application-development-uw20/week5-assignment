import React from 'react';
import Character from './Character';
import CharacterPageNavigator from './CharacterPageNavigator';

export default class CharacterList extends React.Component {
  state = {
    isLoading: false,
    response: {
      info: {},
      results: []
    },
    characterListPageNumber: 1,
    pages: 1
  }

  getCharacters = () => {
    this.setState({ isLoading: true }, () => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.characterListPageNumber}`)
        .then(result => result.json())
        .then(data => this.setState({ response: data, isLoading: false }))
    });
  }

  componentDidMount = () => {
    this.getCharacters();
  }

  setCharacterListPageNumber = (characterListPageNumber) => {
    this.setState({
      characterListPageNumber: Number(characterListPageNumber)
    }, this.getCharacters())
  }


  render() {
    const { response } = this.state
    const { results, info } = response
    return (
      <div>
        <CharacterPageNavigator
          info={info}
          characterListPageNumber={this.state.characterListPageNumber}
          setCharacterListPageNumber={this.setCharacterListPageNumber}
        >
        </CharacterPageNavigator>
        <div className={'character-list-container'}>
          { this.state.isLoading
            ? <p>Loading characters...</p>
            : results.map(character => (
              <Character
                key={character.id}
                character={character}
              >
              </Character>
            ))
          }
        </div>
      </div>
    )
  }
}
