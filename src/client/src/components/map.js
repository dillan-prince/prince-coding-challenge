import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

const Map = () => {
    const position = [37.0902, -95.7129];
    return (
        <LeafletMap style={{ height: '85vh' }} center={position} zoom={4}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </LeafletMap>
    );
};

export default Map;
