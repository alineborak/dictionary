import React from 'react';
import './Dictionary.css';

function Dictionary() {
    return (
        <form>
            <input
                type="search"
                placeholder="Search for a word..."
                className="form-control"
                autoFocus="on"
                autoComplete="off"
                id="search-input"
            />
            <input
                className="btn btn-primary w-100"
                id="search-btn"
                type="submit"
                value="Search"
            />
        </form>
    )
}

export default Dictionary;