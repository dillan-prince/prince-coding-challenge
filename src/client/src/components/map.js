import React, { useState } from 'react';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import MapPopup from './mapPopup';

const Map = (props) => {
    const coordinates = [
        props.coordinates.latitude,
        props.coordinates.longitude
    ];

    const [selectedMarker, setSelectedMarker] = useState(null);
    const handleMarkerClick = (index) => {
        setSelectedMarker(props.storeList[index]);
    };

    const renderMarkers = () => {
        return props.storeList.map((store, index) => {
            return (
                <Marker
                    key={index}
                    position={[store.lat, store.lng]}
                    onClick={() => handleMarkerClick(index)}
                ></Marker>
            );
        });
    };

    return (
        <div style={{ position: 'relative' }}>
            {!props.coordinates && 'Loading Map...'}
            {props.coordinates && (
                <LeafletMap
                    style={{ height: '85vh' }}
                    center={coordinates}
                    zoom={props.coordinates.zoom}
                    onClick={() => setSelectedMarker(null)}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {renderMarkers()}
                </LeafletMap>
            )}
            {selectedMarker && <MapPopup store={selectedMarker} />}
        </div>
    );
};

export default Map;
