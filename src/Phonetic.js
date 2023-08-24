import React from "react";
import PropTypes from "prop-types";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Play
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}

Phonetic.propTypes = {
  phonetic: PropTypes.shape({
    audio: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
