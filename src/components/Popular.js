import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Popular extends Component {
    static propTypes = {
        searchByPublisher: PropTypes.func,
    }
        render() {
        return (
            <div className="popularPublishers">
                <div onClick={this.props.searchByPublisher.bind(this, "Marvel Comics")} className="publisher">
                    <p>Marvel Comics</p>
                </div>
                <div onClick={this.props.searchByPublisher.bind(this, "DC Comics")} className="publisher">
                    <p>DC Comics</p>
                </div>
                <div onClick={this.props.searchByPublisher.bind(this, "Dark Horse Comics")} className="publisher last">
                    <p>Dark Horse Comics</p>
                </div>
                
            </div>
        )
    }
}
