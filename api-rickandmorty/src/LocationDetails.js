import React from 'react';
import {Link, Route} from 'react-router-dom';



export default class LocationDetails extends React.Component {
    state= {details: {} };

    componentDidMount() {
        const { loc_id } = this.props.match.params;
        fetch(`https://rickandmortyapi.com/api/location/${loc_id}`)
        .then(res => res.json())
        .then(data => this.setState({details: data }));
        
    }

    render(){
        const { details }= this.state;
        const { char_id } = this.props.match.params;
        
        // console.log(location);
        const updatedDate= new Date(details.created).toLocaleString('en-US');
        
        return (
            <div>
                <h2>{details.id}. {details.name}</h2>
                <p>
                    <b>Type: </b> {details.type} 
                    <p>
                        <b>Dimension: </b>{details.dimension} 
                    </p>
                
                    <p>
                   {details.residents}
                    {/* <Link to ="/characters/id"><em> {details.residents}</em></Link> */}
                    {/* <Route path= "/characters/:char_id" component= {CharacterDetails}  /> */}
                    </p> 
                       
                    <p>
                        <b>Created on: </b>{updatedDate}
                    </p>
                    
                </p>
                
                

            </div>
        )
    }

}