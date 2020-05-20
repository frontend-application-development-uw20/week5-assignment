import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export default class SingleHeroBanner extends React.Component {
    static propTypes = {
        hero: PropTypes.object,
        showModal: PropTypes.func,
    }

    addToFavorites = (name, id, publisher, image) => {
        const favoritesArray = JSON.parse(window.localStorage.getItem("favorites")) || [];
        if (favoritesArray.filter(item => item.id === id).length > 0) {
            this.props.showModal("You already liked this character")
        } else {
            const item = {
                name,
                id,
                publisher,
                image
            }
            favoritesArray.push(item);
            window.localStorage.setItem("favorites", JSON.stringify(favoritesArray));
            this.props.showModal(`${name} was added to your favorites`);
        }
    }

    render() {
        const { image, name, id } = this.props.hero
        const { biography } = this.props.hero;
        const publisher = biography.publisher;
        const alterEgos = biography["alter-egos"];
        const placeOfBirth = biography["place-of-birth"];
        const fullName = biography["full-name"];

        const renderAliases = () => {
            const { aliases } = this.props.hero.biography;
            if (aliases) {
                if(aliases.length === 1) {
                    return aliases[0];
                } else if (aliases.length === 2) {
                    return `${aliases[0]} and ${aliases[1]}`; 
                } else if (aliases.length === 3) {
                    return (`${aliases[0]}, ${aliases[1]} and ${aliases[2]}`)
                } else if (aliases.length > 3) {
                    return aliases.map((item, i) => {
                        if(i < aliases.length - 3) {
                            return `${item}, `
                        } else if(i < aliases.length - 2) {
                            return `${item} and `
                        } else if(i < aliases.length - 1) {
                            return `${item}`
                        }
                    })
                }
            } else {
                return (" - ")
            }
        }

        return (
            <div className="singleHeroBanner">
                <div className="singleImage">
                    <img src={image.url} alt={name} />
                </div>
                <div className="stats">
                    <button className="addToFavorites" onClick={this.addToFavorites.bind(this, name, id, publisher, image.url)} ><FontAwesomeIcon className="icon" icon={faStar} />Add to Favorites</button>
                    <h2>{name}</h2>
                    <p><span className="statsBold">Full Name:</span> {fullName}</p>
                    <p><span className="statsBold">Aliases:</span> {renderAliases()}</p>
                    <p><span className="statsBold">Alter Egos:</span> {alterEgos}</p>
                    <p><span className="statsBold">Place of Birth:</span> {placeOfBirth}</p>
                </div>
            </div>
        )
    }
    
}
