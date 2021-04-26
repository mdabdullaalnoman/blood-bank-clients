import React from 'react';
import './HomeRight.css';
import HomeRightTop from './HomeRightTop';
import HomeCarousel from './HomeCarousel';
import HomeMenuRequest from './HomeMenuRequest';
import HomeMap from './HomeMap';

const HomeRight = () => {
      return (

            <div className="home-right-bg">
                  <div className="container-fluid">
                        <HomeRightTop />
                        <div className="row">
                              <HomeCarousel></HomeCarousel>
                        </div>
                        <div className="row mt-2 mt-md-5">
                              <HomeMenuRequest></HomeMenuRequest>
                              <HomeMap></HomeMap>
                        </div>
                  </div>
            </div>

      );
};

export default HomeRight;