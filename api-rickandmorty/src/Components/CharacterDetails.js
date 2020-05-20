import React from 'react';


export default class CharacterDetails extends React.Component {
    
 
    constructor(props) {
        super(props);
        const {char_id} = this.props.match.params;
        this.favorites = JSON.parse(localStorage.getItem('favCharacters'));

         this.charId = char_id;

         this.state= {
            details: {},
            isFavorite: false
            }
    };
 
     handleFavorite = (e) =>{
                e.preventDefault();
                
                let favorites = this.favorites;

                if (favorites === null) {
                    favorites = [];
                }

                if (this.state.isFavorite) {
                    favorites.splice(favorites.indexOf(this.charId), 1);

                    this.setState({
                        isFavorite: false
                    })
                }
                else {
                    favorites.push(this.charId);

                    this.setState({
                        isFavorite:true,
                    })
                }
                localStorage.setItem("favCharacters", JSON.stringify(favorites));
        }

    componentDidMount() {

        let favorites = this.favorites|| [];

        fetch(`https://rickandmortyapi.com/api/character/${this.charId}`)
        .then(res => res.json())
        .then(data => 
            {
                let isFavorite = favorites.includes(String(data.id)) ? true : false;
                this.setState({details: data, isFavorite: isFavorite })
                }
        );

    }

    render(){

        const { details }= this.state;

        const updatedDate= new Date(details.created).toLocaleString('en-US');
        
        return (
            <div className= "char_details">
                
                <h2>{details.id}. {details.name}
                 
                    <i className="material-icons" style={{ color: 'red' }} id={this.charId+"-favorite"} 
                                    onClick={this.handleFavorite}>
                                    {this.state.isFavorite ? 'favorite': 'favorite_border'}
                                    
                    </i>
                </h2>
            
                <img src = {details.image} alt= {`${details.name} poster`}
                /> <br />

                    <b>Status: </b> {details.status} <br />
                        <b>Species: </b>{details.species} <br/>
                        <b>Gender: </b>{details.gender}<br/>
                        <b>Created on: </b>{updatedDate}

            </div>
        )
    }

}