import React from 'react';

export default class MovieDetails extends React.Component {
  state = {
    isLoading: false,
    details: {},
    errorMessage: '',
  }

    // componentDidMount() {
    //     const { imdbID } = this.props.match.params;
    //     fetch(`http://omdbapi.com/?apikey=REDACTED&i=${imdbID}`)
    //         .then(res => res.json())
    //         .then(data => this.setState({ details: data }));
    // }

  render() {
    return (null)
  };
}

