import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class StatsBar extends Component {
    static propTypes = {
        changeStats: PropTypes.func,
        selected: PropTypes.string,
    }

    render() {
        const selectedStyle = {
            background: "black", 
            color: "#fff"
        }
    
        const unSelectedStyle = {
            background: "#fff",
            color: "black"
        }

        const { selected } = this.props
        return (
            <div className="statsBar">
                <div onClick={this.props.changeStats.bind(this, "appearance")} style={selected === "appearance" ? selectedStyle : unSelectedStyle } className="stats">
                    <p>Appearance</p>
                </div>
                <div onClick={this.props.changeStats.bind(this, "connections")} style={selected === "connections" ? selectedStyle : unSelectedStyle } className="stats">
                    <p>Connections</p>
                </div>
                <div onClick={this.props.changeStats.bind(this, "powerStats")} style={selected === "powerStats" ? selectedStyle : unSelectedStyle } className="stats last">
                    <p>Power Stats</p>
                </div>
            </div>
        )
    }
}
