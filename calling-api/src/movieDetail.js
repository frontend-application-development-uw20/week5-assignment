import React from 'react';
import { API_KEY } from './api-key';

class MovieDetail extends React.Component {
    state = { detail: {} }

    componentDidMount() {
        console.log(this.props);
        const { imdbID } = this.props.match.params;
        console.log(imdbID);

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => this.setState({ detail: data }));
    }

    render() {
        const { detail } = this.state;
        return (
            <div>
                <h1> {detail.Title}</h1>
                <img src={detail.Poster} alt={`${detail.Title} poster`} />
            </div>
        )
    }

}

export default MovieDetail;