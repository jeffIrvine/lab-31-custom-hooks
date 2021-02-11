import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import { useAllCharacters } from '../hooks/character';

const Main = () => {
  const { loading, characters } = useAllCharacters();


  if(loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default Main;
