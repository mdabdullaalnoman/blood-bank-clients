import React from 'react';
import GoogleMaps from './GoogleMaps';
import './HomeMap.css';

const HomeMap = () => {
      return (
            <div className="col-12 col-md-9">
                  <div className="map-text">
                        <h4>Map</h4>
                  </div>
                  <div className="map-box">
                        <GoogleMaps></GoogleMaps>
                  </div>
            </div>
      );
};

export default HomeMap;