import React, {Component} from 'react';
import {MenuButton} from './../MenuButton/MenuButton';
import {MenuPages} from './../MenuPages/MenuPages';

import './Menu.css';

// export function Menu() {
//     return ( <div className="menu-container">
//         <MenuButton/>
//         <MenuPages/>
//     </div>

//     )
// }


export class Menu extends Component {
    state = {
        showMenuPages: false // o proprietate pe obiectul menu
    }
    displayMenuPages = () => {
        console.log ('click pe buton');
        this.setState({showMenuPages: true});
    }
    
    render() {
        console.log(this.props);
        console.log(this.state);
        return ( <div className="menu-container">
            <div className='menu-button' onClick={this.displayMenuPages}>
                <img src="" > </img>
            </div>
            <MenuButton/>
            {
                this.state.showMenuPages ? <MenuPages /> : null
            }
            
        </div>
    )
    }
}
