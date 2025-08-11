import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <em>
          <strong>Example:</strong> {props.meaning.example}
        </em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
