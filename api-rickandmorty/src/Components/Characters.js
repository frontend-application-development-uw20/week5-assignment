import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Characters extends React.Component{
    state= {characters: [],
            page_info:[],
            activePage: 1,
            search: "",
            errorMessage: "",
            
        };

    componentDidMount(){ 
        this.getCharacters();       
    }

    getCharacters(pageNumber=1){
        try{
                fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
                .then(res => res.json())
                .then(data => this.setState(
                    {
                        characters: data.results,
                        page_info: data.info,
                        activePage:pageNumber
                        
                    }));

     }
     catch(error){
        const errorMessage = error.message;
        this.setState({ errorMessage });
            
    }
    }


     updateSearch(event){
         this.setState({search: event.target.value.substr(0,20)});
     }


    render() {
        let favorites= JSON.parse(localStorage.getItem('favCharacters'));

        const {count} = this.state.page_info;
        let filteredCharacters= this.state.characters.filter((character)=>{
                                        return character.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                                 })
  
        return(
            
                <div className= "list" >
                    <h3>Browse Characters Here</h3>
                   <div > 
                       <i className="material-icons" style={{ color: 'gray' }}>search</i><span />
                        <input type = "text" placeholder= "Search here!" className= "search" value= {this.state.search} onChange={this.updateSearch.bind(this) } /> 
                    </div> 

                    <ul>
                        {filteredCharacters.map((character,index) => ( 
                            <span key= {index}> 
                                <Link to = {`/characters/${character.id}`} className="details-elements"> <br/>
                                    <i className="material-icons" style={{ color: 'red' }} >
                                        {!!favorites && favorites.includes(String(character.id)) ? 'favorite': 'favorite_border'}
                                    </i>

                                    {character.name} 
                                </Link> 
                            </span>
                        ))}
                    </ul>
 
                        <Pagination 
                            activePage= {this.state.activePage}
                            totalItemsCount= {count}
                            itemsCountPerPage= {20}
                            onChange = {(pageNumber) => this.getCharacters(pageNumber)} 
                            itemClass= "page-item"
                            linkClass= "page-link"
                            firstPageText= "First"
                            lastPageText= "Last"
    
                        />

                </div>

            
        )
    }

}