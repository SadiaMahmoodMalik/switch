import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  useEffect(
    () => {
      // Define the loadData function inside the useEffect
      function loadData() {
        setLoaded(true);
        search();
      }

      // Load data when the component mounts
      loadData();
    },
    [
      /* dependencies */
    ]
  );

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    const shecodesApiKey = "980ta46f70b3b386c063344ca8aof7b9";
    const shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`;

    axios
      .all([axios.get(apiUrl), axios.get(shecodesApiUrl)])
      .then(
        axios.spread((dictionaryResponse, shecodesResponse) => {
          handleDictionaryResponse(dictionaryResponse.data[0]);
          handleShecodesResponse(shecodesResponse.data.photos);
        })
      )
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }

  function handleShecodesResponse(response) {
    setPhotos(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleDictionaryResponse(response) {
    setResults(response);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeyWordChange}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <div className="hint"></div>
      </section>
      {loaded ? (
        <>
          <Results results={results} />
          <Photos photos={photos} />
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
