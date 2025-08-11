import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);

  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
