import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results.js';
import Photos from './Photos.js';
import axios from 'axios';

function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhoto] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        // console.log(response.data.photos[0].src);
        setPhoto(response.data.photos);
        // setPhoto(response.data.photos[0].src.medium);
    }

    function search(event) {
        event.preventDefault();

        //api documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey = "563492ad6f917000010000012821f9bf1b6346efb1f60e4d49635716";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                    <Photos photos={photos} />
                </form>
            </section>
        </div></>
    )
}

export default Dictionary;

