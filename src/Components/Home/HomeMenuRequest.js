import React from 'react';
import { menuData } from '../FakeData/AllData';
import './HomeMenuRequest.css';
import { requestData } from './../FakeData/AllData';
const HomeMenuRequest = () => {
      return (
            <div className="col-12 col-md-3">


                  {/* for menu data */}
                  <div className="home-menu">
                        <h4>Menu</h4>
                  </div>
                  <div className="menu-parent">
                        {
                              menuData.map(data =>
                                    <div className="home-menu-img">
                                          <img src={data.img} alt="" /><br />
                                          <small><p>{data.tittle}</p></small>
                                    </div>
                              )
                        }
                  </div>


                  {/* for request data */}
                  <div className="request-menu">
                        <div className="home-request">
                              <h4>Request</h4>
                        </div>
                        <div className="menu-parent">
                              {
                                    requestData.map(data =>
                                          <div className="home-menu-img">
                                                <img src={data.img} alt="" /><br />
                                                <small><p>{data.tittle}</p></small>
                                          </div>
                                    )
                              }
                        </div>
                  </div>


            </div>
      );
};

export default HomeMenuRequest;