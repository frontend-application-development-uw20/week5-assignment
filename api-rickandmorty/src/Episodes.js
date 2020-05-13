import React from 'react';
import {Link} from 'react-router-dom';

export default class Episodes extends React.Component{
    state= {episodes: []};

    componentDidMount(){
        
        fetch('https://rickandmortyapi.com/api/episode/')
        .then(res => res.json())
        .then(data => this.setState({episodes: data.results}));
       

    }

  

    render() {
        return(
            <div className= "character_page">
                <h1>Browse Episodes Here</h1>
                <ul>
                    {this.state.episodes.map(episode => ( 
                        <li>
                             <Link to = {`/episodes/${episode.id}`}> 
                                {episode.name}
                             </Link>
                        </li>
                    ))}
                </ul>

            </div>


        )
    }
}