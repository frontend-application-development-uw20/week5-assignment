import React from 'react';
import {  BrowserRouter as Switch, Router, Route, Link} from 'react-router-dom';
import Character from './Character'
class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: [],
            loading: true
        };
    }
    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            this.setState({ charList: data.results, loading: false })
        })
        .catch(error => {
            this.setState({error: true, loading: false})
        })
    }
    render() {
        const { charList } = this.state;
        return (
                charList.map(char => 
                    <Route 
                        key={char.name} 
                        exact 
                        path={"/" + char.name.split(" ")[0]} 
                        render={() => <Character charName={char.name} />}
                    />
                )
          )
    }
}
export default Routes;