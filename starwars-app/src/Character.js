import React from 'react';
import {  BrowserRouter as Switch, Router, Route, Link} from 'react-router-dom';
class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterData: [],
            loading: true
        };
    }
    componentDidMount() {
        fetch(`https://swapi.dev/api/people/?search=${this.props.charName}`)
        .then(response => response.json())
<<<<<<< HEAD
        .then((data) => {
            this.setState({
                characterData: data.results[0],
                loading: false
            })
        })
=======
        // .then(data => {
        //     this.setState({ characterData: data.results })
        // })
        // const { characterData } = this.state;
        // return (
        //     <div>
        //         <h3>{characterData[0].name}</h3>
        //     </div>
        // )
        .then(data => console.log(data.results[0].name));
        // console.log("wtf")
        // console.log(myname);
        // return (
        //     <div>
        //         <h3>{}</h3>
        //     </div>
        // )
>>>>>>> 8fc4f30ef49c9d606f5c5b1c33f2f376d7b840f9
    }
    render() {
        const { characterData, isLoading } = this.state;
            return !isLoading && (
                <div>
                <h3>{characterData.name} </h3>
            </div>
            )
    }
}
export default Character;