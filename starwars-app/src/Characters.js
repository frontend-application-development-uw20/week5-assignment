import React from 'react';

class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charList: [],
        };
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => this.setState({ charList: data.results }));
    }

    render() {
        const { charList } = this.state;

        return (
            <ul>
                {charList.map(char => 
                    <li key={char.objectID}>
                        <b>{char.name}</b>
                    </li>
                )}
            </ul>
        );
    }
}

export default Characters;