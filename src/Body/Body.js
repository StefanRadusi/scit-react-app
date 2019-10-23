import React from 'react';
import Timer from './Timer/Timer';
import Home from './BodyPages/Home/Home';
import Contact from './BodyPages/Contact/Contact';
import Events from './BodyPages/Events/Events';
import Useful from './BodyPages/Useful/Useful';
import Users from './BodyPages/Users/Users';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Body() {
    return (<Router>
        <div className='bodyContent '>
        <Timer />
            {/* <Link to='/'><p>Home</p></Link>
            <Link to='/contact'><p>Contact</p></Link>
            <Link to='/events'><p>Events</p></Link>
            <Link to='/useful'><p>Useful</p></Link>
            <Link to='/users'><p>Users</p></Link> */}

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/events" component={Events} />
                <Route path="/useful" component={Useful} />
                <Route path="/users" component={Users} />
            </Switch>
           
        </div>
    </Router>);
}
export default Body;
