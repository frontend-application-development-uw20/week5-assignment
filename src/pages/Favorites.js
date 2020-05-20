import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import '../App.scss';

export default class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorites: [],
            showModal: false,
        }
    }

    componentDidMount() {
        this.setState({ favorites: JSON.parse(window.localStorage.getItem("favorites")) });
    }

    removeFavorite = (id) => {
        const favorites = JSON.parse(window.localStorage.getItem("favorites"));
        const filteredFavorites = favorites.filter(item => item.id !== id);
        window.localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
        this.setState({ showModal: true, favorites: JSON.parse(window.localStorage.getItem("favorites")) });
        this.closeModal();
    }

    closeModal = () => {
        window.setTimeout(() => {
            this.setState({ showModal: false })
        }, 1500);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                {this.state.favorites.length > 0 ? null : <div className="message">You have no favorites saved</div> }
                <main className="cardContainer">
                    { this.state.favorites.length > 0 ? this.state.favorites.map(hero => {
                    return <CharacterCard 
                                    key={hero.id} 
                                    name={hero.name} 
                                    id={hero.id} 
                                    isFavorite={true}
                                    publisher={hero.publisher} 
                                    removeFavorite={this.removeFavorite}
                                    image={hero.image} />
                    }) : null}
                    {this.state.showModal ? <Modal message="Character removed from your favorites" /> : null}
                </main>
            </React.Fragment>
        )
    }
}
