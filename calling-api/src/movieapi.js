import React from 'react';
import MovieCard from './movieCard';
import { API_KEY } from './api-key';

// fetch('http://www.omdbapi.com/?apikey=' + API_KEY + '&s=batman')
//     // fetch('http://www.omdbapi.com/?apikey=d924b900&s=batman')
//     .then(res => res.json())
//     .then(data => console.log(data));

export default class Movie extends React.Component {
    state = {
        response: '',
        res_error: '',
        movies: [],
        loading: false,
        error: false,
        movie: ''
    }

    searchForMovie = (e) => {
        e.preventDefault();
        console.log(this.state.movies);

        this.setState({ loading: true }, () => {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.movie}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data.Response);
                    console.log(data.Error);
                    this.setState({ movies: data.Search, response: data.Response, res_error: data.Error, loading: false })
                })
                .catch(err => this.setState({ loading: false, error: true })
                );
        });
    }

    inputData = (e) => {
        this.setState({ movie: e.target.value })
    }

    render() {
        // console.log(this.state);
        const { movies, response, res_error } = this.state;

        if (this.state.loading) {
            return <div>....loading</div>;
        }

        if (this.state.error) {
            return <div>An error occurred. Please contact your system administrator </div>;
        }

        return (
            <div>
                <h1>Search your movie</h1>
                <form className="search-form" onSubmit={this.searchForMovie}>
                    <input type="text" value={this.state.movie} onChange={this.inputData} />
                    <button type="submit"> Search </button>
                </form>
                <ol>
                    {/* < Card movie={movies} /> */}
                    {response === 'True' ? < MovieCard movie={movies} /> : (<p> {res_error} </p>)}
                </ol>
            </div>
        )
    }
}
