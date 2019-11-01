import React from 'react';
import './Pages.css';
import {Home} from './Home/Home';
import {Events} from './Events/Events';
import {Users} from './Users/Users';
import {Useful} from './Useful/Useful';
import {Contact} from './Contact/Contact';

export function Pages(props) {
    const renderRoute = () => {
        

        switch(props.newRoute1) {
            case "Home":
                return <Home />;
            case "Events":
                return <Events />;
            case "Users":
                return <Users />;
            case "Useful":
                return <Useful />;
            case "Contact":
                return <Contact />;
            default:
                return "Page not defined";
        };
    }

    return(
        <div className='body-pages'>
            { renderRoute() }            
        </div>
    );
}