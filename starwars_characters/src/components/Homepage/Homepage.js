import React, {useEffect, useState} from 'react';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import background from './38593963cb13fee9bc7f4f8eb75caa8b.jpg';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const containerStyle = {
  height: '750px',
  backgroundImage: `url(${background})`,
}

const Homepage = props => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');

  // let backToUrl = `http://swapi.dev/api/people/?page=${backtopage}`

  useEffect(() => {
    getPage( currentPage ? currentPage : 'https://swapi.dev/api/people/');
  }, []);

  const getPage = (page) => {
    fetch(page)
      .then(res => res.json())
      .then(data => parseData(data))
  };

  const parseData = (data) => {
      setCharacters(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
  };

  const handleNext = () => {
    setPrevPageUrl(currentPage);
    setCurrentPage(nextPageUrl);
    getPage(nextPageUrl);
  };

  const handlePrevious = () => {
    setNextPageUrl(currentPage);
    setCurrentPage(prevPageUrl);
    getPage(prevPageUrl);
  };

  const getCharacterIndex = (character) => {
    return ((character.url).split('/'))[5];
  };

  return (
    <Container fluid="md" style={containerStyle}>
      <div className={'charList'}>
        <h1 style={{marginTop:'20px'}}>Starwars Characters</h1>
        <ul>
          {characters.map((character, idx) => (
            <li key={idx}>
              <Link to={`/characterDetails/${getCharacterIndex(character)}`}>
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{marginTop:'30px', display:'inlineBlock', border:'10px'}}>
          <button onClick={handlePrevious}>Prev</button>
          <button onClick={handleNext}>Next</button>
      </div>
    </Container>
  )
}

export default Homepage;


Homepage.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        hair_color: PropTypes.string,
        skin_color: PropTypes.string,
        eye_color: PropTypes.string,
        birth_year: PropTypes.string,
        gender: PropTypes.string,
        homeworld: PropTypes.string,
        films: PropTypes.array,
        species: PropTypes.array,
        vehicles: PropTypes.array,
        starships: PropTypes.array,
        created: PropTypes.string,
        edited: PropTypes.string,
        url: PropTypes.string,
      })
    )
  })
}
