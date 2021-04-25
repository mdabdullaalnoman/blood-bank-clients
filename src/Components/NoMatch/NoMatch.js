import { Button } from '@material-ui/core';
import React from 'react';
import './NoMatch.css';
const NoMatch = () => {


      function goBack() {
            window.history.back();
      };
      function pageReload() {
            window.location.reload()
      };


      return (
            <div className="no-match">
                  <div className="no-match-child">
                        <h1>OPS !</h1>
                        <h2>Page Not Found</h2>
                        <h3 className="text-bold">404</h3>
                        <Button onClick={() => goBack()} variant="contained" color="primary">
                              Go Back
                        </Button><br />
                        <Button onClick={() => pageReload()} variant="contained" color="secondary">
                              Reload
                        </Button>
                  </div>
            </div>
      );
};

export default NoMatch;