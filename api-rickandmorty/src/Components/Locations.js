import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Locations extends React.Component{
    state= {locations: [],
            page_info:[],
            activePage: 1,
            search: ""
        };

    componentDidMount(){
        
            this.getLocations();       
        }
    
    getLocations(pageNumber=1){ 
        fetch(`https://rickandmortyapi.com/api/location/?page=${pageNumber}`)
        .then(res => res.json())
        .then(data => this.setState(
            {
                locations: data.results,
                page_info: data.info,
                activePage:pageNumber
            }));
       
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }

  

    render() {

        const {count} = this.state.page_info;

        let filteredLocations= this.state.locations.filter((location)=>{
            return location.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        
        return(
            
                <div className= "list" >
                    <h3>Browse Locations Here</h3>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                   <div > 
                       <i className="material-icons" >search</i><span />
                        <input type = "text" placeholder= "Search here!" className= "search" value= {this.state.search} onChange={this.updateSearch.bind(this) } /> 
                    </div> 
                    <ul>
                        {filteredLocations.map((location,index) => ( 
                            <span key= {index}>
                                <Link to = {`/locations/${location.id}`} className= "details-elements"> <br/>
                                    {location.name}
                                </Link>
                            </span>
                        ))}
                    </ul>

                
                    <Pagination 
                    activePage= {this.state.activePage}
                    totalItemsCount= {count}
                    itemsCountPerPage= {20}
                    onChange = {(pageNumber) => this.getLocations(pageNumber)} 
                    itemClass= "page-item"
                    linkClass= "page-link"
                    firstPageText= "First"
                    lastPageText= "Last"
  
                    />

                </div>

           
        )
    }
}