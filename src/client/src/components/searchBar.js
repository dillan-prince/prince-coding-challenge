import React, { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const searchUndebounced = (value) => fetch(`/api/search?q=${value}`);
    const searchDebounced = AwesomeDebouncePromise(searchUndebounced, 500);

    const handleSearch = async (e) => {
        setSearchValue(e.target.value);

        if (e.target.value.length < 2) {
            return;
        }

        const response = await searchDebounced(e.target.value);
        const json = await response.json();
        props.handleSearchBarChange(json);
    };

    return (
        <div className="SearchBar">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city, state, or postal code..."
                    style={{ boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)' }}
                    value={searchValue}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default SearchBar;
