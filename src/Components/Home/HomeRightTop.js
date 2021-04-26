import React from 'react';
import './HomeRightTop.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const HomeRightTop = () => {
      return (
            <div className="home-right-parent">
                  <div className="home-right-left">
                        <h5>Campaign</h5>
                        <p>Avilable</p>
                  </div>
                  <div className="home-right-right">
                        <div className="three-dot">
                              <p>noman</p>
                              <p>fuyad</p>
                        </div>
                        <div className="login-profile">
                              <MoreVertIcon />
                        </div>
                  </div>
            </div>
      );
};

export default HomeRightTop;