import React from 'react';
import Home from './BodyPages/Home/Home';
import Contact from './BodyPages/Contact/Contact';
import Events from './BodyPages/Events/Events';
import Useful from './BodyPages/Useful/Useful';
import Users from './BodyPages/Users/Users';
import NotFound from './BodyPages/Users/Users';
import './BodyContent.css';

export function Body(props) {

    return (
        <div className='bodyContent' onClick={props.hideMenu}>
            {(() => {
                switch (props.clickedPage) {
                    case 'Home':
                        return <Home />
                    case 'Contact':
                        return <Contact />
                    case 'Events':
                        return <Events />
                    case 'Useful':
                        return <Useful />
                    case 'Users':
                        return <Users />
                    default:
                        return <NotFound />
                }
            })()}
        </div>
        
    );

}

export default Body;
