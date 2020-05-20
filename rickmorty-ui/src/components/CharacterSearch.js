import React from 'react';
import './CharacterSearch.css';
import Utility from './Utility';

{/* 
  BONUS: Search
  Kind of made my own bonus criteria :)
  Noticed that the API provides the ability to search/filter by character attributes.
  So this components allows you to search characters by "status" or "gender", which dynamically 
  updates the corresponding values drop-down with values accepted by the API.
  Wanted more practice with different kinds of form controls as well as event handlers.
  If there was more time, I'd also include reuse the pagination component, but currently the 
  search results only shows the first 20 charcters that match the search criteria - oh well, maybe in vNext!
 */}
export default class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCriteria: "status",
      searchCriteriaOption: "alive",
      isLoading: false,
      searchResults: [],
    }

    this.statusOptions = [
      {value: "alive", display: "Alive"},
      {value: "dead", display: "Dead"},
      {value: "unknown", display: "Unknown"}
    ]

    this.genderOptions = [
      {value: "female", display: "Female"},
      {value: "male", display: "Male"},
      {value: "genderless", display: "Genderless"},
      {value: "unknown", display: "Unknown"},
    ]
  }
  
  getOptions(searchCriteria) {
    let options;
    if (searchCriteria === 'status') { 
      options = this.statusOptions;
    } else if (searchCriteria === 'gender') {
      options = this.genderOptions;
    } else {
      throw new Error('Search criteria options not found.');
    }

    return options.map((option, index) => 
      <option key={index} value={option.value}>{option.display}</option>);
  }

  search(url) {
    console.log('url:', url);
    fetch(url)
    .then(response => {
      if (response.status === 200) { // OK
        response.json()
        .then(data => {
          this.setState({ searchResults: data.results, isLoading: false })
        })
      } else if (response.status === 404) { 
        response.json()
        .then(error => { 
          this.setState({isLoading: false});
          throw new Error(`${response.status}: ${JSON.stringify(error)}`)
        })
        .catch(error => console.log(Utility.apiErrorCode, error.message))
      }
    })
    .catch(error => {
      console.log(Utility.apiErrorCode, error.message || 'An unexpected error occurred while retrieving data.');
      this.setState({isLoading: false});
    });
  }

  handleSearchCriteriaChange = (e) => {
    this.setState({
      searchCriteria: e.target.value
    });
  }

  handleSearchCriteriaOptionChange = (e) => {
    this.setState({
      searchCriteriaOption: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {searchCriteria, searchCriteriaOption} = this.state;
    console.log('search criteria:', searchCriteria);
    console.log('search option:', searchCriteriaOption);

    const url = `${Utility.baseUrl}?${searchCriteria}=${searchCriteriaOption}`;
    this.setState({searchResults: [], isLoading: true}, () => this.search(url));
  }

  render() {
    const {searchCriteria, searchCriteriaOption, searchResults} = this.state;

    return (
      <main id="main-search">
        <section id="section-search">
          <h2>Search</h2>
          <form id="form-search" onSubmit={this.handleSubmit}>
            <fieldset className="form-group">             
              <legend>Search criteria</legend>
              <div>
                <input type="radio" id="status" name="search-criteria" value="status"
                  checked={searchCriteria === "status"}
                  onChange={this.handleSearchCriteriaChange}
                />
                <label htmlFor="status">Status</label><br />
              </div>
              <div>
                <input type="radio" id="gender" name="search-criteria" value="gender" 
                  checked={searchCriteria === "gender"}
                  onChange={this.handleSearchCriteriaChange}
                />
                <label htmlFor="gender">Gender</label>
              </div>
            </fieldset>

            <div className="form-group">
              <label htmlFor="search-criteria-options">Search criteria options</label><br />
              <select id="search-criteria-options" name="search-criteria-options" value={searchCriteriaOption}
                onChange={this.handleSearchCriteriaOptionChange}
              >
                {this.getOptions(searchCriteria)}
              </select>
            </div>

            <button type="Submit">Search</button>
          </form>
        </section>

        <section id="section-search-results">
          <h2>Search Results</h2>

          <div id="container-search-results">
            {searchResults.map(character => (
              <p className="search-result" key={character.id}>{character.name}</p>
            ))}
          </div>
        </section>
      </main>
    );
  }
}