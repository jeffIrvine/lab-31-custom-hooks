import { useState, useEffect } from 'react';
import { getAllCharacters } from '../services/getAll';
import { getSingleCharacter } from '../services/getSingle';

export const useSingleCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setDetail] = useState([]);

  useEffect(() => {
    getSingleCharacter(id)
      .then((character) => {
        setDetail(character);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    character
  };
};

export const useAllCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setList] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((characters) => {
        setList(characters);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    characters
  };
};
