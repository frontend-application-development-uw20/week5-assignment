import React from 'react';
import {  BrowserRouter as Switch, Router, Route, Link} from 'react-router-dom';
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
                <div>
                <h3>{characterData.name} </h3>
            </div>
            )
    }
}
export default Character;