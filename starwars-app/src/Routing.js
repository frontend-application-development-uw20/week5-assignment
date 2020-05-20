import React from 'react';
import {  BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Character from './Character';
import './Routing.css';

class Routing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charList: [],
            loading: true,
            currentUrl: 'https://swapi.dev/api/people'
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
            <span><ul style={{listStyle: 'none'}}>
                    {charList.map(char => 
                            <li key={char.name}><span><Link to={"/" + char.name}>{char.name}</Link></span></li>
                            )}
                    </ul>
                    {charList.map(char => 
                        <Route 
                            key={char.name} 
                            exact 
                            path={"/" + char.name} 
                            render={() => <Character charName={char.name} />}
                        />
                    )}</span>
        );
    }
}

export default Routing;