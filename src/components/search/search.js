import React from 'react';
import './search.styles.css';

const Search = ({ChangeHandler}) => {
    return (
        <div className="search-wrapper">
            <input type="search" className="search" onChange={ChangeHandler} placeholder="Search Monsters..." />
        </div>
    )
}

export default Search;