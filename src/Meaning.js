import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p>
                <strong>Defintion: </strong>
                {definition.definition}
                <br />
                <strong>Example: </strong>

                <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p>
                <strong>Defintion: </strong>
                {definition.definition}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
