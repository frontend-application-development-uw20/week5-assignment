import React from 'react';
import egg from './egg.svg';

export default class Games extends React.Component {
  render() {
    return (
      <div className='construction'>
        <img id='pokemon-big' src={egg} alt='Pokeball-Big'/>
        <b>Under Construction</b>
        <img id='pokemon-big' src={egg} alt='Pokeball-Big'/>
      </div>
    )
  };
}
