import React, { useState, useEffect } from 'react';
import StoreListItem from './storeListItem';

const StoreList = () => {
    const [stores, setStores] = useState([]);

    const getStores = async () => {
        const cacheListKey = 'popspots_store_list_object_cache_key';
        const cacheTimeKey = 'popspots_store_list_time_cache_key';

        const storeListString = localStorage.getItem(cacheListKey);
        const timeStoredString = localStorage.getItem(cacheTimeKey);

        if (storeListString) {
            const timeStored = Number.parseInt(timeStoredString);
            const now = Date.now();

            // if object was stored less than 4 hours ago
            if (now - timeStored < 1000 * 60 * 60 * 4) {
                const storeList = JSON.parse(storeListString);
                setStores(storeList);
                console.log(stores);
                console.log(storeList);
            }
        } else {
            const endpoint =
                'https://dashboard.getpopspots.com/public-data/challenge';

            const response = await fetch(endpoint);
            const json = await response.json();
            localStorage.setItem(cacheListKey, JSON.stringify(json));
            localStorage.setItem(cacheTimeKey, Date.now().toString());
            setStores(json);
        }
    };

    useEffect(() => {
        getStores();
    }, []);

    return (
        <div className="StoreList" style={{ border: '2px solid red' }}>
            <span>StoreList</span>
            {stores.map((store, index) => {
                return <StoreListItem key={index} />;
            })}
        </div>
    );
};

export default StoreList;
