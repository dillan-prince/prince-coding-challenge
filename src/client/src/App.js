import React from 'react';
import SearchBar from './components/searchBar';
import StoreList from './components/storeList';
import Map from './components/map';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <SearchBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <StoreList />
                    </div>
                    <div className="col">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
