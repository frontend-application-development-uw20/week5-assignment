import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";

export default function CharacterDetails() {
  const [character, characterDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => characterDetail(data));
  });
  
  return (
    <div>
      <h1>{character.name}</h1>
      <div class="text">Type: {character.type} </div>
      <div class="text">Species: {character.species} </div>
      <div class="text">Status: {character.status} </div>
      <div class="text">Gender: {character.gender} </div>
      <img class="rounded" src={character.image} alt={`${character.name}`} />
    </div>
  );
}


