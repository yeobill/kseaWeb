import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter className="container-fluid">
        <Routes />
    </BrowserRouter>
), document.getElementById('root'));
