import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  //console.log(props.results);
  //console.log(props.results.meanings[0].partOfSpeech);
  //console.log(props.results.meanings[0].synonyms);
  //console.log(props.results.phonetic);

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
