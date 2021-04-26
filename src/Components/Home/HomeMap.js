import React from 'react';
import GoogleMap from './GoogleMap';
import './HomeMap.css';

const HomeMap = () => {
      return (
            <div className="col-12 col-md-9">
                  <div className="map-text">
                        <h4>Map</h4>
                  </div>
                  <div className="map-box">
                        <GoogleMap />
                  </div>
            </div>
      );
};

export default HomeMap;