import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function displayDefinition(response) {
    setResults(response.data);
  }

  function displayPexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(displayDefinition);

    let pexelApiKey =
      "DBJHcCFEaIeyZ0Z1yzNoJTQv7XqgsaMxdi46uyuUQ6AfD3psmbSbI8TO";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelApiKey}` };

    axios.get(pexelApiUrl, { headers: headers }).then(displayPexelResponse);
  }

  function submitForm(event) {
    event.preventDefault();
    search();
  }

  function searchDisplay(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={submitForm}>
            <input
              type="search"
              onChange={searchDisplay}
              defaultValue={props.defaultkeyword}
            />
          </form>
          <div className="suggested">
            suggested word: fire, love, joy, travel
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
