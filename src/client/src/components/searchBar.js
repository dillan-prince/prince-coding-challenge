import React, { useState } from 'react';

const SearchBar = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        props.handleSearchBarChange(newValue);
    };

    return (
        <div className="SearchBar">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city, state, or postal code..."
                    style={{ boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)' }}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default SearchBar;
