import React from 'react';
import { Link } from 'react-router-dom';
import './HomeMenuRequest.css';

const HomeMenuRequest = () => {

      return (
            <div className="col-12 col-md-3">


                  {/* for menu data */}
                  <div className="home-menu">
                        <h5>Menu</h5>
                  </div>
                  <div className="menu-parent">
                        <div className="home-menu-img">
                              <img src="https://i.imgur.com/kWsM8vp.jpg" alt="" /><br />
                              <small><p>Book</p></small>
                        </div>
                        <div className="home-menu-img">
                              <img src="https://i.imgur.com/ReGvYiX.png" alt="" /><br />
                              <small><p>Donasion</p></small>
                        </div>
                        <div className="home-menu-img">
                              <img src="https://i.imgur.com/hkr8fw1.png" alt="" /><br />
                              <small><p>Donar</p></small>
                        </div>
                        <div className="home-menu-img">
                              <img src="https://i.imgur.com/xgB02pM.jpg" alt="" /><br />
                              <small><p>My List</p></small>
                        </div>
                  </div>


                  {/* for request data */}
                  <div className="request-menu">
                        <div className="home-request">
                              <h5>Request</h5>
                        </div>
                        <div className="menu-parent">
                              <div className="home-menu-img">
                                    <img src="https://i.imgur.com/tQvwFp4.jpg" alt="" /><br />
                                    <small><p>Urgent Request</p></small>
                              </div>
                              <div className="home-menu-img">
                                    <img src="https://i.imgur.com/h9sMTk6.png" alt="" /><br />
                                    <small><p>My Request</p></small>
                              </div>
                              <div className="home-menu-img">
                                    <img src="https://i.imgur.com/ycEybNp.png" alt="" /><br />
                                    <Link to="/postRequest"><small><p>PostRequest</p></small></Link>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default HomeMenuRequest;