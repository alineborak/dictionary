import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';

function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
        //api documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input
                    id="search-input"
                    type="search"
                    onChange={handleKeywordChange}
                    placeholder="Enter a word..."
                    autoFocus="on"
                    autoComplete="off"
                />
                <input
                    id="search-btn"
                    className="btn btn-primary w-100"
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    )
}

export default Dictionary;

