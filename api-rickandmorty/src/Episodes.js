import React from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Episodes extends React.Component{
    state= {episodes: [],
            page_info:[],
            activePage: 1};

    componentDidMount(){
        this.getEpisodes();       
        }
    

    getEpisodes(pageNumber=1){
        fetch(`https://rickandmortyapi.com/api/episode/?page=${pageNumber}`)
        .then(res => res.json())
        .then(data => this.setState({
            episodes: data.results,
            page_info: data.info,
            activePage:pageNumber
        }));
    }

    render() {
        const {count} = this.state.page_info;
        return(
            <React.Fragment>
                <div className= "character_page">
                    <h1>Browse Episodes Here</h1>
                    <ul>
                        {this.state.episodes.map((episode,index) => ( 
                            <li key= {index}>
                                <Link to = {`/episodes/${episode.id}`} className= "details-elements"> 
                                    {episode.name}
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
                    onChange = {(pageNumber) => this.getEpisodes(pageNumber)} 
                    itemClass= "page-item"
                    linkClass= "page-link"
                    firstPageText= "First"
                    lastPageText= "Last" />
                </div>
            </React.Fragment>


        )
    }
}