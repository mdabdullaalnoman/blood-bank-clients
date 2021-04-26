import React from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Home = () => {
      return (
            <div className="container-fluid">
                  <div className="row">
                        <div className="col-12 col-md-2">
                              <HomeLeft />
                        </div>
                        <div className="col-12 col-md-10">
                              <HomeRight />
                        </div>
                  </div>
            </div>


      );
};

export default Home;