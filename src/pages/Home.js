import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import Popular from '../components/Popular';
import Modal from '../components/Modal';
import '../App.scss';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            savedData: {},
            errMess: '',
            currentPage: 1,
            totalPages: 1,
            modalMessage: '',
        }
    }

    componentDidMount() {
        this.fetchData("t");
    }

    fetchData = (query) => {
        this.setState({ isLoading: true });
        const key = process.env.REACT_APP_API_KEY
        fetch(`https://www.superheroapi.com/api.php/${key}/search/${query}`)
        .then(res => res.json())
        .then(data => {
            if(data.response === "error") {
                this.showModal(data.error);
            }
            let pages = [];
            while(data.results.length) {
                pages.push(data.results.splice(0,24))
            }
            this.setState({ data: pages, savedData: pages, totalPages: pages.length, isLoading: false });
        })
        .catch(err => {
            this.setState({ isLoading: false });
            this.showModal("Oops, something went wrong. Please try again!");
        })
    }

    searchByPublisher = (publisher) => {
        this.setState({ isLoading: true })
        const allCharactersArray = [];
        this.state.savedData.forEach(item => allCharactersArray.push(...item));
        const filtered = allCharactersArray.filter(character => character.biography.publisher === publisher);
        let pages = [];
        while(filtered.length) {
            pages.push(filtered.splice(0,25))
        }
        this.setState({ data: pages, totalPages: pages.length, isLoading: false });
        
    }

    nextPage = () => {
        if (this.state.currentPage + 1 <= this.state.totalPages) {
            this.setState({ currentPage: this.state.currentPage + 1 });
            window.scrollTo(0, 0)
        }
    }

    prevPage = () => {
        if(this.state.currentPage - 1 > 0) {
            this.setState({ currentPage: this.state.currentPage - 1 });
            window.scrollTo(0, 0)
        }
    }

    showModal = (message) => {
        this.setState({ showModal: true, modalMessage: message });
        this.closeModal();
    }

    closeModal = () => {
        window.setTimeout(() => {
            this.setState({ showModal: false })
        }, 1500);
    }

    render() {
        
        return (
            <div>
                <NavBar />
                <Hero searchHeroes={this.fetchData} />
                <Popular searchByPublisher={this.searchByPublisher} />
                {this.state.isLoading ? <Loading /> : null}
                {this.state.showModal ? <Modal message={this.state.modalMessage} /> : null}
                <main className="cardContainer">
                    {this.state.isLoading ? null : this.state.data[this.state.currentPage - 1].map(hero => {
                        return (
                            <CharacterCard 
                                key={hero.id} 
                                name={hero.name} 
                                id={hero.id} 
                                isFavorite={false}
                                publisher={hero.biography.publisher} 
                                image={hero.image.url} />
                        )
                    })}
                </main>
                <Pagination 
                    currentPage={this.state.currentPage} 
                    totalPages={this.state.data.length} 
                    nextPage={this.nextPage} 
                    prevPage={this.prevPage} />
            </div>
        )
    }
}
