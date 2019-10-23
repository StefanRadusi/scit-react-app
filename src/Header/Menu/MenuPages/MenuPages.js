import React from 'react';
import '../MenuPages/PageButton/PagesButton.css'
import { CloseBtn } from './CloseBtn/CloseBtn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HomePageButton } from './PageButton/HomePageButton';
import { ContactPageButton } from './PageButton/ContactPageButton';
import { EventsPageButton } from './PageButton/EventsPageButton';
import { UsefulPageButton } from './PageButton/UsefulPageButton';
import { UsersPageButton } from './PageButton/UsersPageButton';



export function MenuPages({ openPages }) {
    return (
        <div className="menu-pages-conatainer" id='pages' >
            <div className="arrow"></div>

            <div className='pages'>
                <CloseBtn openPages={openPages} />
                <HomePageButton text='Home' />
                <ContactPageButton text='Contact' />
                <EventsPageButton text='Events' />
                <UsefulPageButton text='Useful' />
                <UsersPageButton text='Users' />
            </div>

        </div>
    )
}

