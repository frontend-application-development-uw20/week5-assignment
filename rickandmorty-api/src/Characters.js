import React from 'react';
import { Link } from 'react-router-dom';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { characters: []};
    }

    componentDidMount() {
        for (var i = 1; i < 21; i++) {
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
                .then(res => res.json())
                .then(data => this.setState({ characters: this.state.characters.concat(data.results) }))
        }
    }

    render() {
        return (
            <div>
                <h1>Rick and Morty Characters</h1>
                    {this.state.characters.map(character => (
                        <div>
                            <img src={character.image} />
                            <p><Link to={`/characters/${character.id}`}>{character.name}</Link></p>
                        </div>
                    ))}
            </div>

        )
    }
}