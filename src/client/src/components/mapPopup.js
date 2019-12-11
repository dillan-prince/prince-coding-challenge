import React from 'react';

const MapPopup = (props) => {
    const renderContent = () => {
        if (props.store) {
            return (
                <div>
                    <h6>{props.store.name}</h6>
                    <span>{props.store.address}</span>
                </div>
            );
        }
    };

    return (
        <div
            className="MapPopup"
            style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                zIndex: '3000',
                backgroundColor: '#ffffff',
                border: '1px solid #d3d3d3',
                borderRadius: '5px',
                padding: '10px',
                textAlign: 'center'
            }}
        >
            {renderContent()}
        </div>
    );
};

export default MapPopup;
