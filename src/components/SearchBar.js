import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
    static propTypes = {
        searchHeroes: PropTypes.func,
    }
        constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    search = event => {
        event.preventDefault();
        this.props.searchHeroes(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <input type="text" name="query" onChange={this.handleChange} value={this.state.query} />
                    <button placeholder="Enter a name to search..." type="submit">Search</button>
                </form>
            </div>
        )
    }
}
