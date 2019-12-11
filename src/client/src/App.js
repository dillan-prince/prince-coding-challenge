import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import StoreList from './components/storeList';
import Map from './components/map';

const App = () => {
    const [storeList, setStoreList] = useState([]);

    const getStoreList = async () => {
        const cacheListKey = 'popspots_store_list_object_cache_key';
        const cacheTimeKey = 'popspots_store_list_time_cache_key';

        const storeListString = localStorage.getItem(cacheListKey);
        const timeStoredString = localStorage.getItem(cacheTimeKey);

        if (storeListString) {
            const timeStored = Number.parseInt(timeStoredString);
            const now = Date.now();

            // if object was stored less than 4 hours ago
            if (now - timeStored < 1000 * 60 * 60 * 4) {
                console.log('Retrieving storeList from cache');
                const stores = JSON.parse(storeListString);
                setStoreList(stores);
            }
        } else {
            console.log('Retrieving storeList from server');
            const response = await fetch(
                'https://dashboard.getpopspots.com/public-data/challenge'
            );
            const json = await response.json();
            localStorage.setItem(cacheListKey, JSON.stringify(json));
            localStorage.setItem(cacheTimeKey, Date.now().toString());
            setStoreList(json);
        }
    };

    useEffect(() => {
        getStoreList();
    }, []);

    const handleSearchBarChange = async (value) => {
        const response = await fetch(`/api/search?q=${value}`);
        console.log(response);
    };

    const handleStoreSelected = (store) => {
        console.log('Selected Store: ' + store.name);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div
                        className="col-md"
                        style={{ marginTop: '1em', marginBottom: '1em' }}
                    >
                        <SearchBar
                            handleSearchBarChange={handleSearchBarChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-4"
                        style={{
                            maxHeight: '85vh',
                            overflowY: 'scroll',
                            marginRight: '0'
                        }}
                    >
                        <StoreList
                            storeList={storeList}
                            handleStoreSelected={handleStoreSelected}
                        />
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
