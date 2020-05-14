import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Characters extends React.Component{
    state= {characters: [],
            page_info:[],
            activePage: 1
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

    


    render() {
        const {count} = this.state.page_info;
  
        return(
            <React.Fragment>
                <div>
                    <h1>Browse Characters Here</h1>
                    <ul>
                        {this.state.characters.map((character,index) => ( 
                            <li key= {index}> 
                                <Link to = {`/characters/${character.id}`} className= "details-elements"> 
                                    {character.name} 
                                    {}
                                </Link>
                            </li>
                        ))}
                    </ul>
    
                </div>
                 

                <div className= "Pages">
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
    

//     count: 591
// next: "https://rickandmortyapi.com/api/character/?page=2"
// pages: 30
// prev: null







}