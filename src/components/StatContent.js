import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';
import PropTypes from 'prop-types';

export default class StatContent extends Component {
    static propTypes = {
        selected: PropTypes.string,
        hero: PropTypes.object
    }

    render() {
        const { selected } = this.props;
        const { gender, height, race, weight } = this.props.hero.appearance;
        const { url } = this.props.hero.image;
        const eyeColor = this.props.hero.appearance["eye-color"];
        const hairColor = this.props.hero.appearance["hair-color"];
        const { combat, durability, intelligence, power, speed, strength } = this.props.hero.powerstats;
        const { base, occupation} = this.props.hero.work;
        const groupAffiliation = this.props.hero.connections["group-affiliation"];
        const { relatives } = this.props.hero.connections;
        
        if(selected === "appearance") {
            return (
                <div className="statContent">
                    <h3>Appearance</h3>
                    <div className="appearanceGrid">
                        <div>
                            <p><span className="stat">Eye Color: </span>{eyeColor}</p>
                            <p><span className="stat">Hair Color: </span>{hairColor}</p>
                            <p><span className="stat">Height: </span>{`${height[0]} - ${height[1]}`}</p>
                            <p><span className="stat">Weight: </span>{`${weight[0]} - ${weight[1]}`}</p>
                            <p><span className="stat">Gender: </span>{gender}</p>
                            <p><span className="stat">Race: </span>{race}</p>
                        </div>
                        <div>
                            <img src={url} alt={this.props.hero.name} />
                        </div>
                    </div>
                </div>
            )
        } else if (selected === "connections") {
            return (
                <div className="statContent">
                    <h3>Connections</h3>
                    <p><span className="stat">Group Affiliations: </span>{groupAffiliation}</p>
                    <p><span className="stat">Relatives: </span>{relatives}</p>
                    <p><span className="stat">Work: </span>{base}</p>
                    <p><span className="stat">Occupation: </span>{occupation}</p>
                </div>
            )
        } else {
            return (
                <div className="statContent">
                    <h3>Power Stats</h3>
                    <div className="grid">
                        <div className="item">
                            <p><span className="stat">Combat: </span>{combat}%</p><ProgressBar status={parseInt(combat)} />
                            <p><span className="stat">Durability: </span>{durability}%</p><ProgressBar status={parseInt(durability)} />
                        </div>
                        <div className="item">
                            <p><span className="stat">intelligence: </span>{intelligence}%</p><ProgressBar status={parseInt(intelligence)} />
                            <p><span className="stat">Power: </span>{power}%</p><ProgressBar status={parseInt(power)} />
                        </div>
                        <div className="item">
                            <p><span className="stat">Speed: </span>{speed}%</p><ProgressBar status={parseInt(speed)} />
                            <p><span className="stat">Strength: </span>{strength}%</p><ProgressBar status={parseInt(strength)} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}
