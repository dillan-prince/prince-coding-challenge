import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        const search = async () => {
            if (debouncedSearchValue) {
                const response = await fetch(
                    `/api/search?q=${debouncedSearchValue}`
                );
                const json = await response.json();
                props.handleSearchBarChange(json);
            }
        };

        search();
    }, [debouncedSearchValue]);

    return (
        <div className="SearchBar">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city, state, or postal code in the United States..."
                    style={{ boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)' }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;
