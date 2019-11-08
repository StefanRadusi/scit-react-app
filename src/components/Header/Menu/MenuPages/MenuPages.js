import React from 'react';
import './MenuPages.css';
import { Home } from './Home/Home';
import { Events } from './Events/Events';
import { Users } from './Users/Users';
import { Useful } from './Useful/Useful';
import { Contact } from './Contact/Contact';
import { PageButton } from './PageButton/PageButton';
import { CloseMenuButton } from './CloseMenuButton/CloseMenuButton';








export function MenuPages(props) {
  return (
    props.show ? 
    <div className='menu-pages'> 	
      <div className='arrow'></div>
     <CloseMenuButton/>
    <PageButton/>
     <Home/>
     <Events/>
     <Users/>
     <Useful/>
     <Contact/>
    

    </div> 
    : null
  );
}