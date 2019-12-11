import React from 'react';
import StoreListItem from './storeListItem/storeListItem';

const StoreList = (props) => {
    const renderStoreList = () => {
        if (props.storeList.length > 0) {
            return props.storeList.map((store, index) => {
                return (
                    <StoreListItem
                        key={index}
                        store={store}
                        handleStoreListItemSelected={props.handleStoreSelected}
                    />
                );
            });
        }

        return 'Loading Stores...';
    };

    return <div className="StoreList">{renderStoreList()}</div>;
};

export default StoreList;
