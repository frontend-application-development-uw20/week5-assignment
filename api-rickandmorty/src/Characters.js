import React from 'react';
import {Link} from 'react-router-dom';

export default class Characters extends React.Component{
    state= {characters: []};

    componentDidMount(){
        
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => this.setState({characters: data.results}));
       

    }

  

    render() {
        return(
            <div className= "character_page">
                <h1>Browse Characters Here</h1>
                <ul>
                    {this.state.characters.map(character => ( 
                        <li>
                             <Link to = {`/characters/${character.id}`}> 
                                {character.name}
                             </Link>
                        </li>
                    ))}
                </ul>

            </div>


        )
    }
}