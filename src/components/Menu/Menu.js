import React, { Component } from 'react';
import './Menu.css';
import { MenuBtn } from './MenuBtn.js'
import { PagesContainer } from '../Pages/PagesContainer';





class Menu extends Component {
    constructor() {
        super()
        this.state = {
            showPages: false,
            showClosingBtn: false,
        }
    }

    clickEvent = () => {
        this.setState({
            showPages: !this.state.showPages
        });
    }

    closeButton = () => {
        this.setState({
            showClosingBtn: !this.state.showClosingBtn
        })

    }
    render() {
        return (

            <div className='menu-container'>
                <MenuBtn openPages={this.clickEvent}
                />
                {this.state.showPages ? <PagesContainer closingPage = {this.closeButton} />  : null}
                {console.log(this.state.showPages)}


            </div>


        );
    }
}


export default Menu;
