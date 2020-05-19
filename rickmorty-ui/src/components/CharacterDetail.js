import React from 'react';
import Utility from './Utility';
import './CharacterDetail.css';

export default class CharacterDetail extends React.Component {
  state = { 
    detail: {},
    isLoading: false,
  };

  getCharacterDetail = (url) => {
    fetch(url)
    .then(response => {
      if (response.status === 200) { // OK
        response.json()
        .then(data => {
          this.setState({ detail: data, isLoading: false })
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

  displayCharacterCard = () => {
    return this.state.isLoading ? Utility.loadingIndicator : <CharacterCard detail={this.state.detail} />
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    const url = `${Utility.baseUrl}${id}`;
    console.log('character detail url', url);

    this.setState({detail: {}, isLoading: true}, () => this.getCharacterDetail(url))
  }

  render() {
    return (
      <main id="main-detail">
        <h2>Character Detail</h2>
        <div id="container-detail">
          {this.displayCharacterCard()}
        </div>
      </main>
    )
  }
}

function CharacterCard(props) {
  function getFacetJsx(facet) {
    const bracketStart = '{'
    const bracketEnd = '}'
    const facetJsx = facet
      ? <div className="facet-value">{facet}</div>
      : <div className="facet-value none">{bracketStart}none specified{bracketEnd}</div>
    return facetJsx;
  }

  const {name, status, species, type, gender, origin, location, image} = props.detail;
  const originName = origin ? origin.name : '';
  const locationName = location ? location.name: '';

  return(
    <section className="character-card">
      <img className="character-image" src={image} alt={name} />

      <div className="facet-group">
        <div className="facet-header">Name</div>
        {getFacetJsx(name)}
      </div>

      <div className="facet-group">
        <div className="facet-header">Status</div>
        {getFacetJsx(status)}
      </div>

      <div className="facet-group">
        <div className="facet-header">Species</div>
        {getFacetJsx(species)}
      </div>

      <div className="facet-group">
        <div className="facet-header">Type</div>
        {getFacetJsx(type)}
      </div>

      <div className="facet-group">
        <div className="facet-header">Gender</div>
        {getFacetJsx(gender)}
      </div>

      <div className="facet-group">
        <div className="facet-header">Origin</div>
        {getFacetJsx(originName)}
      </div>

      <div className="facet-group">
        <div className="facet-header">Location</div>
        {getFacetJsx(locationName)}
      </div>
    </section>
  );
}