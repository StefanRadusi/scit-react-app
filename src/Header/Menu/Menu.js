import React, { Component } from 'react';
import './Menu.css';
import { MenuBtn } from './MenuBtn/MenuBtn.js';
import { MenuPages } from './MenuPages/MenuPages';


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPages: false

        }
    }

    openMenuPages = () => {
        this.props.toggleMenuPages();

        this.setState({
            showPages: !this.state.showPages,

        });
    }
    render() {
        return (
            <div className='menu-container' 
            >
                <MenuBtn open={this.openMenuPages} 
                 hideMenu = {this.props.hideMenu}
                 />

                {this.props.showMenuPages ?

                    <MenuPages
                        open = {this.openMenuPages}
                        toggleSelectPage = {this.props.toggleSelectPage}

                        selectPages = {this.props.selectPages}
                        clickedPage = {this.props.clickedPage}
                    /> : null}

            </div>
        );
    }
}


export default Menu;
