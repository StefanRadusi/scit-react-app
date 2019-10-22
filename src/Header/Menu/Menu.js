import React, { Component } from 'react';
import './Menu.css';
import { MenuBtn } from './MenuBtn/MenuBtn.js';
import { MenuPages } from './MenuPages/MenuPages';





class Menu extends Component {
    constructor() {
        super()
        this.state = {
            showPages: false,
         
    }
    }
    clickEvent = () => {
        this.setState({
            showPages: !this.state.showPages
        });
    }


    
    render() {
        return (

            <div className='menu-container'>
                <MenuBtn openPages={this.clickEvent}
                />
                {this.state.showPages ? <MenuPages openPages = {this.clickEvent} />  : null}


            </div>


        );
    }
}


export default Menu;
