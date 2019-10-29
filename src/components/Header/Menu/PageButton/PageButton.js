import React, {Component} from 'react';
import './PageButton.css';

export class PageButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <p class="pageButtonName">{this.props.pageButtonName}</p>;
    }
}