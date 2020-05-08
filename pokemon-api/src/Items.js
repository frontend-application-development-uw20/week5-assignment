import React from 'react';
import entoron from './entoron.svg';


export default class Items extends React.Component {
  render() {
    return (
      <div className='construction'>
        <img id='pokemon-big' src={entoron} alt='Pokeball-Big'/>
        <b>Under Construction</b>
        <img id='pokemon-big' src={entoron} alt='Pokeball-Big'/>
      </div>
    )
  };
}
