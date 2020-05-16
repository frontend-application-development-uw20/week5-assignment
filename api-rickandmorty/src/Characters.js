import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Characters extends React.Component{
    state= {characters: [],
            page_info:[],
            activePage: 1,
            search: ""
        };

    componentDidMount(){ 
        this.getCharacters();       
    }

    getCharacters(pageNumber=1){
                fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
                .then(res => res.json())
                .then(data => this.setState(
                    {
                        characters: data.results,
                        page_info: data.info,
                        activePage:pageNumber
                    }));
 
     }

     updateSearch(event){
         this.setState({search: event.target.value.substr(0,20)});
     }


    render() {
        const {count} = this.state.page_info;
        let filteredCharacters= this.state.characters.filter((character)=>{
                                        return character.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                                 })
  
        return(
            <React.Fragment>
                <div className= "list" >
                    <h3>Browse Characters Here</h3>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                   <div > 
                       <i className="material-icons" >search</i><span />
                        <input type = "text" placeholder= "Search here!" class= "search" value= {this.state.search} onChange={this.updateSearch.bind(this) } /> 
                    </div> 

                    <ul>
                        {filteredCharacters.map((character,index) => ( 
                            <span key= {index}> 
                                <Link to = {`/characters/${character.id}`} className= "details-elements"> <br/>
                                    {character.name} 
                                    {}
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

            </React.Fragment>
        )
    }

}