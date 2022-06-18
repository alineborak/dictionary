import React, { useState } from 'react';
import './Dictionary.css';

function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input
                    type="search"
                    onChange={handleKeywordChange}
                    placeholder="Search for a word..."
                    autoFocus="on"
                    id="search-input"
                />
                <input
                    className="btn btn-primary w-100"
                    id="search-btn"
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    )
}

export default Dictionary;

