import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Locations extends React.Component{
    state= {locations: [],
            page_info:[],
            activePage: 1
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

  

    render() {
        const {count} = this.state.page_info;
        return(
            <React.Fragment>
                <div>
                    <h1>Browse Locations Here</h1>
                    <ul>
                        {this.state.locations.map((location,index) => ( 
                            <li key= {index}>
                                <Link to = {`/locations/${location.id}`} className= "details-elements"> 
                                    {location.name}
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
                    onChange = {(pageNumber) => this.getLocations(pageNumber)} 
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