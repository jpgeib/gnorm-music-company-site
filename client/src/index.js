import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter as Router } from "react-router-dom";

import App from './containers/App';

ReactDOM.render( 
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));