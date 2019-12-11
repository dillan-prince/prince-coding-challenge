import React, { useState, useEffect } from 'react';
import { getDistance } from 'geolib';
import SearchBar from './components/searchBar';
import StoreList from './components/storeList';
import Map from './components/map';

const App = () => {
    const [storeList, setStoreList] = useState([]);

    const [coordinates, setCoordinates] = useState({
        latitude: 37.0902,
        longitude: -95.7129,
        zoom: 4
    });

    useEffect(() => {
        const setSortedStoreList = (stores) => {
            setStoreList(
                stores.sort((storeOne, storeTwo) => {
                    const distanceOne = getDistance(coordinates, {
                        latitude: storeOne.lat,
                        longitude: storeOne.lng
                    });

                    const distanceTwo = getDistance(coordinates, {
                        latitude: storeTwo.lat,
                        longitude: storeTwo.lng
                    });

                    return distanceOne - distanceTwo;
                })
            );
        };

        const getStoreList = async () => {
            let stores = [];

            const cacheListKey = 'popspots_store_list_object_cache_key';
            const cacheTimeKey = 'popspots_store_list_time_cache_key';

            const storeListString = localStorage.getItem(cacheListKey);
            const timeStoredString = localStorage.getItem(cacheTimeKey);

            if (storeListString) {
                const timeStored = Number.parseInt(timeStoredString);
                const now = Date.now();

                // if object was stored less than 4 hours ago
                if (now - timeStored < 1000 * 60 * 60 * 4) {
                    stores = JSON.parse(storeListString);
                    return setSortedStoreList(stores);
                }
            }

            const response = await fetch(
                'https://dashboard.getpopspots.com/public-data/challenge'
            );
            const json = await response.json();

            localStorage.setItem(cacheListKey, JSON.stringify(json));
            localStorage.setItem(cacheTimeKey, Date.now().toString());

            return setSortedStoreList(json);
        };

        getStoreList();
    }, [coordinates]);

    const handleSearchBarChange = (coords) => {
        setCoordinates({ ...coords, zoom: 8 });
    };

    const handleStoreSelected = (store) => {
        const { lat, lng } = store;
        setCoordinates({ latitude: lat, longitude: lng, zoom: 10 });
    };

    return (
        <div className="App">
            <div className="container-fluid">
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
                        <Map coordinates={coordinates} storeList={storeList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
