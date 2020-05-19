import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterList.css';
import Utility from './Utility';
import ListPagination from './ListPagination';

export default class CharacterList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      characters: [],
      characterCount: 0,
      currentPage: 0,
      pageCount: 0,
    };
  }

  computePageCharacterNums = (currentPage, pageCount, charactersLength) => {
    // Based on API documentation: 
    // API automatically paginates the responses, with max of 20 documents/characters per page.
    const pageCharacterCount = 20;

    const pageCharacterNumStart = (currentPage > 0 && pageCharacterCount > 0) 
      ? ((currentPage - 1) * pageCharacterCount) + 1 : 0;

    // Last page may not contain 20 characters.
    const isLastPage = currentPage === pageCount;
    const pageCharacterNumEnd = (currentPage > 0 && pageCharacterCount > 0)
      ? (pageCharacterNumStart + (isLastPage ? charactersLength : pageCharacterCount)) - 1: 0;

    return {start: pageCharacterNumStart, end: pageCharacterNumEnd}
  }

  handleGetPage = (pageNumber) => {
    const url = `${Utility.baseUrl}?page=${pageNumber}`;
    console.log('charater list page url', url);

    fetch(url)
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(data => {
          const {results} = data;
          const characters = results.map(character => ({id: character.id, name: character.name}));
          this.setState({
            characters: characters,
            currentPage: pageNumber,
          });
        })
      } else if (response.status === 404) { 
        response.json()
        .then(error => { throw new Error(`${response.status}: ${JSON.stringify(error)}`)})
        .catch(error => console.log(Utility.apiErrorCode, error.message))
      }
    })
    .catch(error => {
      console.log(Utility.apiErrorCode, error.message || 'An unexpected error occurred.');
    })
  }

  componentDidMount() {
    const initPageNumber = 1;
    const url = `${Utility.baseUrl}?page=${initPageNumber}`;
    console.log('character list url', url);

    // Used to test 404 error which returns response object of {"error":"There is nothing here"}
    // const url = `${this.baseUrl}?page=${31}`;

    fetch(url)
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(data => {
          const {info, results} = data;
          const characters = results.map(character => ({id: character.id, name: character.name}));
          this.setState({
            characters: characters,
            characterCount: info.count,
            currentPage: initPageNumber,
            pageCount: info.pages,
          })
        })
      } else if (response.status === 404) { 
        response.json()
        .then(error => { throw new Error(`${response.status}: ${JSON.stringify(error)}`)})
        .catch(error => console.log(Utility.apiErrorCode, error.message))
      }
    })
    .catch(error => {
      console.log(Utility.apiErrorCode, error.message || 'An unexpected error occurred.');
    })
  }

  render() {
    const {characters, characterCount, currentPage, pageCount} = this.state;
    const characterNums = this.computePageCharacterNums(currentPage, pageCount, characters.length);

    return (
      <main id="main-list">
        <h2>Character List</h2>
        <p>Click on a character to view its details.</p>

        <div id="container-characters">
          {characters.map(character => (
            <p className="character" key={character.id}>
              <Link to={`/character/${character.id}`}>{character.name}</Link>           
            </p>
          ))}
        </div>

        {/* BONUS: Enable paging for the character list (if supported by the API) */}
        <ListPagination 
          currentPage={currentPage} 
          pageCount={pageCount}
          onGetPage={this.handleGetPage} 
        />

        <div id="character-numbers">
          {`Displaying [${characterNums.start} to ${characterNums.end}] of ${characterCount} characters.`}
        </div>
      </main>
    );
  }
}