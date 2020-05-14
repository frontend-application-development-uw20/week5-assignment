import React from 'react';




export default class CharacterDetails extends React.Component {
    state= {details: {} };

    componentDidMount() {
        const { char_id} = this.props.match.params;
        

        fetch(`https://rickandmortyapi.com/api/character/${char_id}`)
        .then(res => res.json())
        .then(data => this.setState({details: data }));
        
    }

    render(){
        const { details }= this.state;
        const location = details.location;
        // console.log(location);
        const updatedDate= new Date(details.created).toLocaleString('en-US');
        
        return (
            <div className= "char_details">
                <h2>{details.id}. {details.name}</h2>
                <img src = {details.image} alt= {`${details.name} poster`}
                />
                <p>
                    <b>Status: </b> {details.status} 
                    <p>
                        <b>Species: </b>{details.species} 
                    </p>
                    <p>
                        <b>Gender: </b>{details.gender}
                    </p>
                    <p>
                        {/* {location.name} */}
                        {/* <b>Location: </b>{location.map(loc => <div>{loc.name}</div>)} */}
                        <b>Created on: </b>{updatedDate}
                    </p>
                    
                </p>
                
                

            </div>
        )
    }

}