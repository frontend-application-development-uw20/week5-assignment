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
                    <b>Air_Date: </b> {details.air_date} <br />
                        <b>Episode: </b>{details.episode} <br />
                    <b>Characters: </b>{details.characters} <br />
                        <b>Created on: </b>{updatedDate} <br />

                </p>

            </div>
        )
    }

}