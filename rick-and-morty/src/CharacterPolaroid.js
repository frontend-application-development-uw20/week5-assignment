import React from 'react';

export default function CharacterPolaroid(props) {
  const { image, name, created } = props
  return (
    <div className={'character-container'}>
      <div className={'character-image-container'}>
        <img src={image} alt={`portrait of ${name}`}></img>
        <p className={'image-time-stamp'}>{created}</p>
      </div>
      <div className={'caption'}>{name}</div>
    </div>
  )
}
