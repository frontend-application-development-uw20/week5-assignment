import React from 'react';
import {Link} from 'react-router-dom';

export default class Locations extends React.Component{
    state= {locations: []};

    componentDidMount(){
        
        fetch('https://rickandmortyapi.com/api/location/')
        .then(res => res.json())
        .then(data => this.setState({locations: data.results}));
       

    }

  

    render() {
        return(
            <div className= "character_page">
                <h1>Browse Locations Here</h1>
                <ul>
                    {this.state.locations.map(location => ( 
                        <li>
                             <Link to = {`/locations/${location.id}`}> 
                                {location.name}
                             </Link>
                        </li>
                    ))}
                </ul>

            </div>


        )
    }
}