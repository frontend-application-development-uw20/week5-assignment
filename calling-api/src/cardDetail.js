import React from 'react';

const Card = (props) => {
    // console.log(props);
    return (
        <div>
            {/* <li key={props.movie.imdbID}>
                <h1>Title: {props.movie.Title}</h1>
                <img src={props.movie.Poster} alt={props.movie.imdbID} width='200' />
                <p>  Desc: {props.movie.Plot} </p>
            </li> */}

            {props.movie.map((movie, idx) =>
                <li key={idx}>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.imdbID} width='200' />
                    <p>  Desc: {movie.imdbID} </p>
                </li>
            )}
        </div>
    )
}

export default Card;