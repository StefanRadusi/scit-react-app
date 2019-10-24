import React from 'react';
import Timer from './Timer/Timer';
import Home from './BodyPages/Home/Home';
import Contact from './BodyPages/Contact/Contact';
import Events from './BodyPages/Events/Events';
import Useful from './BodyPages/Useful/Useful';
import Users from './BodyPages/Users/Users';
import NotFound from './BodyPages/Users/Users';
import './BodyContent.css';

import { Route, Switch } from 'react-router-dom';

export function Body() {
    return (
        <div className='bodyContent '>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/timer" component = {Timer} />
                <Route path="/contact" component={Contact} />
                <Route path="/events" component={Events} />
                <Route path="/useful" component={Useful} />
                <Route path="/users" component={Users} />
                <Route path = '*' conponent = {NotFound}/>}
            </Switch>
           
        </div>
   );
}
export default Body;
