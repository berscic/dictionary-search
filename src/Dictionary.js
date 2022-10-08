import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form on Submit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
