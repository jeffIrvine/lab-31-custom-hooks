/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Character from '../components/characters/Character';
import { getSingleCharacter } from '../services/getSingle';

const DetailContainer = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setDetail] = useState([]);

  useEffect(() => {
    getSingleCharacter(match.params.id).then((detail) => {
      setDetail(detail);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <Character {...character} />;
};

export default DetailContainer;
