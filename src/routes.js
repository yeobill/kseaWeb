
// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './pages/main';
import About from './pages/about';
import Committee from './pages/committee';
import Photos from './pages/photos';
import Members from './pages/members';
import Events from './pages/events';
import Contact from './pages/contact.js';
import LoginPage from './pages/login';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/committee" component={Committee} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </main>
);

export default Routes;
