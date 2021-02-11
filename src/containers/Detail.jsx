/* eslint-disable react/prop-types */
import React from 'react';
import Character from '../components/characters/Character';
import { useSingleCharacter } from '../hooks/character';

const Detail = ({ match }) => {
  const { loading, character } = useSingleCharacter(match.params.id);


  if(loading) return <h1>Loading</h1>;
  return <Character {...character} />;
};

export default Detail;
