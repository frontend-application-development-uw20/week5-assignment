import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterPolaroid from './CharacterPolaroid';

export default class Character extends React.Component {
  static propTypes = {
    character: PropTypes.shape({
      created: PropTypes.string.isRequired,
      episode: PropTypes.arrayOf(PropTypes.string),
      gender: PropTypes.string,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      location: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
      origin: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
      species: PropTypes.string,
      status: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    })
  }

  render() {
    const { id, name, image, created } = this.props.character
    return (
      <Link to={`/week5-assignment/character/${id}`}>
        <CharacterPolaroid
          name={name}
          image={image}
          created={created}
        >
        </CharacterPolaroid>
      </Link>
    )
  }
}
