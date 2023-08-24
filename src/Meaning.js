import React from "react";
import PropTypes from "prop-types";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

Meaning.propTypes = {
  meaning: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(
      PropTypes.shape({
        definition: PropTypes.string.isRequired,
        example: PropTypes.string,
        synonyms: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
  }).isRequired,
};
