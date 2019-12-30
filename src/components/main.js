import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './landingpage';
import About from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />

        </Switch>
    );
};

export default Main;
