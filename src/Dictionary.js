import React, { useState, CSSProperties } from "react";
import axios from "axios";
import Results from "./Results";
import ClipLoader from "react-spinners/ClipLoader";
import "./Dicitionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for word"
            onChange={keywordChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-primary ms-2"
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();

    return (
      <div className="sweet-loading">
        <ClipLoader
          color="#693d73"
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
}
