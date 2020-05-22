import React from 'react';

export default class MovieDetails extends React.Component {
    state = { details: {} };

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => this.setState({ details: data }));
    }

    render() {
        const { details } = this.state;
        return (
            <div>
                <img src={details.image} />
                <p>Name: {details.name}</p>
                <p>Status: {details.status}</p>
                <p>Species: {details.species}</p>
                <p>Gender: {details.gender}</p>
                {/* <p>Location: {details.location.name}</p>   */}
            </div>
        )
    }
}