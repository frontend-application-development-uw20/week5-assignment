import React from 'react';
import SearchBar from '../components/SearchBar';
import PropTypes from 'prop-types';


export default function Hero(props) {
    return (
        <div className="heroBanner">
            <div className="overlay"></div>
            <div className="heading">
                <h1>SUPERHERO FINDER</h1>
                <SearchBar searchHeroes={props.searchHeroes} />
            </div>
            <img src="http://www.psdgraphics.com/file/grunge-halftone.jpg" alt=""/>
        </div>
    )
}

Hero.propTypes = {
    searchHeroes: PropTypes.func
}
