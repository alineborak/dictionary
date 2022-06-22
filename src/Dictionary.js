import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results.js';
import axios from 'axios';

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        //api documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <><div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <input
                        id="search-input"
                        type="search"
                        onChange={handleKeywordChange}
                        placeholder="Enter a word..."
                        autoComplete="off" />
                    <input
                        id="search-btn"
                        className="btn btn-primary w-100"
                        type="submit"
                        value="Search" />
                    <Results results={results} />
                </form>
            </section>
        </div></>
    )
}

export default Dictionary;

