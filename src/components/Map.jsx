import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 51.5085,
    longitude: 0.12574,
    zoom: 2,
    pitch: 20
  });

  return (
    <ReactMapGL
    mapboxApiAccessToken ={'pk.eyJ1IjoiZHVjZTIwMSIsImEiOiJja28xOHc2cmcwNjNlMm9seWVxdTl6MWMzIn0.2TccEnLb_8I_LxPfEqKjWg'}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    className="map"
    mapStyle="mapbox://styles/mapbox/dark-v9"
    />
  );
}
export default Map
