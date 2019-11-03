import React from 'react';
import './MenuPages.css';
import Contact from '../../../Body/Pages/Contact/Contact';
import Home from '../../../Body/Pages/Home/Home';
import Events from '../../../Body/Pages/Events/Events';
import Users from '../../../Body/Pages/Users/Users';
import Useful from '../../../Body/Pages/Useful/Useful';




export function MenuPages(props) {
  return (
    props.show ? 
    <div className='menu-pages'> 	
      <div className='arrow'></div>
      <Home/>
      <Events/>
      <Users/>
      <Useful/>
      <Contact/>
    </div> 
    : null
  );
}
