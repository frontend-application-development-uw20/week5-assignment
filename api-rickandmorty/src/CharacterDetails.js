import React from 'react';




export default class CharacterDetails extends React.Component {
    favoriteData;
    constructor(props) {
        super(props);

         this.state= {
            details: {} ,
            isFavorite: false}
        };


     handleFavorite = (e) =>{
                e.preventDefault();
                console.log(this.state.isFavorite);
                
                if(!this.state.isFavorite){
                    console.log("inside set Favourite");
                    
                    document.getElementById(this.props.id+"-favorite").innerHTML= "favorite";
                    document.getElementById(this.props.id+"-favorite").classList.add("favorite");
                
                }
                else
                {
                    console.log("inside remove Favourite");
                    document.getElementById(this.props.id+"-favorite").classList.remove("favorite");
                    document.getElementById(this.props.id+"-favorite").innerHTML= "favorite_border";
                    
                }
                
                this.setState((prevState) =>{
                    return {isFavorite:!prevState.isFavorite};
                })

                
                
              }

        

    componentDidMount() {

        // const { char_id} = this.props.match.params;
        
        this.favoriteData = JSON.parse(localStorage.getItem('favorite'))

        // if(localStorage.getItem('favorite')){
        //     this.setState({
        //         details: this.favoriteData.details,
        //         isFavorite: this.favoriteData.isFavorite
        //     })
            
        // }


        // else{
        
        const { char_id} = this.props.match.params;

        fetch(`https://rickandmortyapi.com/api/character/${char_id}`)
        .then(res => res.json())
        .then(data => this.setState({details: data }));

        // }
        
         
    }
  

      


    render(){
        const { details }= this.state;

        const updatedDate= new Date(details.created).toLocaleString('en-US');
        
        return (
            <div className= "char_details">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <h2>{details.id}. {details.name} <i className="material-icons" id={this.props.id+"-favorite"} 
                                    onClick={this.handleFavorite}>favorite_border</i></h2>
            
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