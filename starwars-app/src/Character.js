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

    static getCharDetail(charName) {
        let myname = ''
        fetch(`https://swapi.dev/api/people/?search=${charName}`)
        .then(response => response.json())
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
        console.log("wtf")
        console.log(myname);
        // return (
        //     <div>
        //         <h3>{}</h3>
        //     </div>
        // )
    }

    render() {
        const { characterData } = this.state;
            return (
                <div>
                <h3></h3>
            </div>


            )
            
    }

}

export default Character;