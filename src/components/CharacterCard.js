import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class CharacterCard extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.string,
        publisher: PropTypes.string,
        image: PropTypes.string,
        isFavorite: PropTypes.bool,
        removeFavorite: PropTypes.func,
    }

    // Many of the image links from the api are broken. This sets a default image source when image fails to load
    addDefaultSrc = (e) => {
        e.target.src = "http://cdn.collider.com/wp-content/uploads/2018/06/big-hero-6-the-series-11.jpg"
    }

    render() {
         const { name, id, publisher, image, isFavorite } = this.props;
        return(
            <div className="characterCard">
                <Link to={`/hero/${id}`} className="characterImage">
                    <img onError={this.addDefaultSrc} src={image} alt={name} />
                </Link>
                <div className="comicPill">
                    {publisher}
                </div>
                <div className="characterName">
                    <h2>{name}</h2>
                </div>
                {isFavorite ? <div onClick={this.props.removeFavorite.bind(this, id)} className="removeFavorite"><FontAwesomeIcon icon={faTrashAlt} /></div> : null}
            </div>
        )
    }
  

}

export default CharacterCard;