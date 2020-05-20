import React, { Component } from 'react';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import StatsBar from '../components/StatsBar';
import StatContent from '../components/StatContent';
import SingleHeroBanner from '../components/SingleHeroBanner';
import '../App.scss';

export default class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errMess: '',
            data: {},
            showModal: false,
            modalMessage: '',
            selected: "appearance",
        }
    }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData() {
        const id = this.props.match.params.heroId
        console.log(id)
        const key = process.env.REACT_APP_API_KEY
        fetch(`https://www.superheroapi.com/api.php/${key}/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ data: data, isLoading: false });
            console.log(this.state)
        })
        .catch(err => {
            this.setState({ isLoading: false, errMess: "Oops, something's not right"})
        })
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

    changeStats = (stat) => {
        this.setState({ selected: stat })
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.isLoading ? <Loading /> : <SingleHeroBanner showModal={this.showModal} hero={this.state.data} />}
                <StatsBar selected={this.state.selected} changeStats={this.changeStats} />
                {this.state.isLoading ? <Loading /> : <StatContent selected={this.state.selected} hero={this.state.data} />}
                {this.state.showModal ? <Modal message={this.state.modalMessage} /> : null}
            </div>
        )
    }
}
