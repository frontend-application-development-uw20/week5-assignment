import React from 'react';
import pikachu from './pikachu.svg';

export default class Items extends React.Component {
  state = {
    isLoading: false,
    item: [],
    errorMessage: '',
    searchInput: ''
  }

  searchForItem = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, item: [], errorMessage: '' }, () => {
        fetch(`https://pokeapi.co/api/v2/item/${this.state.searchInput}`)
          .then(res => {
            if (res.status === 404) {
              throw new Error('Item not found');
            } else {
              return res.json();
            }
          })
          .then(data => this.setState({ item: data, isLoading: false }))
          .catch(error => {
            const errorMessage = error.message;
            this.setState({ isLoading: false, errorMessage });
          });
    });
  }

  onInputChange = (e) => {
    this.setState({
        searchInput: e.target.value
    });
  }

  itemDetails = () => {
    return this.state.isLoading
      ? <div className='isLoading'><img src={pikachu} className='Loading-logo' alt='loading-logo' /> Loading...</div>
      : <div>
          <h1>Name: {this.state.item.name}</h1>
            <div>Cost: {this.state.item.cost}</div>
        </div>;
}

  render() {
    return (
      <div>
        <h1>Search for Pokemon Items</h1>
        <form onSubmit={this.searchForItem}>
          <input type="text" value={this.state.searchInput} placeholder={'master-ball'} onChange={this.onInputChange} />
          <button type="submit">Search</button>
        </form>
        <div>{this.state.errorMessage}</div>
        <div>{this.itemDetails()}</div>
      </div>
    )
  };
}
