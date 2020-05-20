import React from 'react';
import './Character.css'
class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterData: [],
            loading: true
        };
    }
    componentDidMount() {
        fetch(`https://swapi.dev/api/people/?search=${this.props.charName}`)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                characterData: data.results[0],
                loading: false
            })
        })
    }
    render() {
        const { characterData, isLoading } = this.state;
            return !isLoading && (
                <div className="Character">
                        <ul className="CharacterDetails">
                            <li><b>{characterData.name}</b></li>
                            <li>Height: {characterData.height}cm</li>
                            <li>Weight: {characterData.mass}kg</li>
                            <li>Born: {characterData.birth_year} Galatic Standard</li>
                        </ul>
            </div>
            )
    }
}
export default Character;