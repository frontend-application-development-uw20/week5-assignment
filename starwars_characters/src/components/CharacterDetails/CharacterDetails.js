import React, { useState , useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import background from './star-wars-backgrounds-25.jpg';
import '../assets/common.css';
import './CharacterDetails.css';
import PropTypes from "prop-types";

const detailStyle = {
  height: '750px',
  backgroundImage: `url(${background})`,
}

const CharacterDetails = props => {
  const [titles, setTitles] = useState([]);
  const [starshipNames, setStarshipNames] = useState([]);
  const [homeworld, setHomeworld] = useState('');
  const [name, setName] = useState('');
  const [birthyear, setBirthyear] = useState('');

  let {idx} = useParams();
  let url = `https://swapi.dev/api/people/${idx}/`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => getDetails(data))
  }, [url]);

  function getDetails(chardata) {
    let filmUrls = chardata.films;
    let starshipUrls = chardata.starships;
    let homeworldUrl = chardata.homeworld;
    setName(chardata.name);
    setBirthyear(chardata.birth_year);

    fetch(homeworldUrl)
      .then(res => res.json())
      .then(data => setHomeworld(data.name));

    filmUrls.forEach((filmUrl) =>  {
       fetch(filmUrl)
        .then(res => res.json())
        .then(data => setTitles(titles => titles.concat(data.title)))
    })
    starshipUrls.forEach((starshipUrl) => {
       fetch(starshipUrl)
        .then(res => res.json())
         .then(data => setStarshipNames(starshipNames => starshipNames.concat(data.name)))
    })
  }

    return (
      <div style={detailStyle} className={'main'}>
      <div className={'centered'}>
        <p>{name} is from planet {homeworld}.
          Birthyear is {birthyear}.
          Featured in the following movies:
        </p>
        <ul style={{margin:10}}>
          {titles.map((title, idx) => (
            <li key={idx}>
              {title}
            </li>
          ))}
        </ul>
        {starshipNames.length > 0 &&
            <ul style={{margin:10}}>Commandeered the following spacecraft:
              {starshipNames.map((ship, idx) => (
                <li key={idx}>
                  {ship}
                </li>
              ))}
            </ul>
        }
        <div>
          <button>
            <Link to={`/homepage`}>
              Go Back
            </Link>
          </button>
        </div>
      </div>
      </div>
    )
}

export default CharacterDetails;

CharacterDetails.propTypes = {
  chardata: PropTypes.shape({
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
    }
    )
}

