import React from 'react';



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
        //const { char_id } = this.props.match.params;
        
        // console.log(location);
        const updatedDate= new Date(details.created).toLocaleString('en-US');
        
        return (
            <div>
                <h2>{details.id}. {details.name}</h2> <br />
                    <b>Type: </b> {details.type} <br />
                    <b>Dimension: </b>{details.dimension} <br />
                        {details.residents} <br />
                    <b>Created on: </b>{updatedDate}

            </div>
        )
    }

}