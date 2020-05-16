import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return (
        <div>
            {props.movie.map((movie, idx) =>
                < li key={idx} >
                    {/* <button type="button" onClick={getDetail}>{movie.Title}</button> */}
                    < Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                </li >
            )}
        </div >
    )
}

export default MovieCard;