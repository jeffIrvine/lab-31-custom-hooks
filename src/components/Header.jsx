import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

const Character = ({ count }) => {

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <button>&lt</button>
        <span>Page #</span>{count}
        <button>&gt</button>
      </div>
      <div>
        <Link to={'/'}/>
      </div>
    </>
  );
};

Character.propTypes = {
  count: PropTypes.integer.isRequired
};


export default Character;
