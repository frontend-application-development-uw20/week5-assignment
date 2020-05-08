import React from 'react';
import { Link } from 'react-router-dom';
import pikachu from './pikachu.svg';


export default class Pokemon extends React.Component {
  state = {
    isLoading: false,
    pokemon: [],
    errorMessage: '',
  }

  // componentDidMount() {
  //   fetch('https://pokeapi.co/api/v2/')
  //       .then(res => res.json())
  //       .then(data => this.setState({ movies: data.SOMETHINGHERE }));
  // }

  LoadSpinner = () => {
    return this.state.isLoading
      ? <div className='isLoading'><img src={pikachu} className='Loading-logo' alt='loading-logo' /> Loading...</div>
      : <div>isloading false</div>;
  }

  render() {
    return (
      <div>{this.LoadSpinner()}</div>
    )
  };
}


