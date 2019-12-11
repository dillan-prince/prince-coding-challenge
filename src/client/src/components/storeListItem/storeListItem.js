import React from 'react';
import './storeListItem.scss';

const StoreListItem = (props) => {
    return (
        <div
            className="StoreListItem"
            onClick={() => {
                props.handleStoreListItemSelected(props.store);
            }}
        >
            <h6>{props.store.name}</h6>
        </div>
    );
};

export default StoreListItem;
