import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function displayDefinition(response) {
    console.log(response.data);
  }

  function submitForm(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(displayDefinition);
  }

  function searchDisplay(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={submitForm}>
        <input type="search" onChange={searchDisplay} />
      </form>
    </div>
  );
}
