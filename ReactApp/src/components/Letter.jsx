import React from 'react';
import { PropTypes } from 'prop-types';

const Letter = ({ selected, onClick, letter }) => {
  const onLetterClickHandler = (event) => {
    onClick(event);
  };
  return (
    <a className="letter-container" onClick={onLetterClickHandler}>
      <p className={`${selected ? 'letterActive' : 'letter'}`}>
        {letter}
      </p>
    </a>
  );
};

Letter.propTypes = {
};

export default Letter;
