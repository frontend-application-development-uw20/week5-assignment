import React from 'react';



export default class EpisodeDetails extends React.Component {
    state= {details: {} };

    componentDidMount() {
        const { ep_id } = this.props.match.params;
        fetch(`https://rickandmortyapi.com/api/episode/${ep_id}`)
        .then(res => res.json())
        .then(data => this.setState({details: data }));
        
    }

    render(){
        const { details }= this.state;
        const updatedDate= new Date(details.created).toLocaleString('en-US');
        
        return (
            <div>
                <h2>{details.id}. {details.name}</h2>
                <p>
                    <b>Air_Date: </b> {details.air_date} 
                    <p>
                        <b>Episode: </b>{details.episode} 
                    </p>
                
                    <p>
                    <b>Characters: </b>{details.characters}
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