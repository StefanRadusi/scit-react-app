import React from 'react';
import {MenuPagesClose} from './../MenuPagesClose/MenuPagesClose';
import './MenuPages.css';

export function MenuPages() {
    return (
        <div className="menu-pages-container" id="pages">
				<div class='arrow'></div>
				<MenuPagesClose />
                // https://codesandbox.io/s/laughing-montalcini-uccx5
                // page button cu props 
				<div class='pages'>
					<p>Page 1</p>
					<p>Page 2</p>
					<p>Page 3</p>
					<p>Page 4</p>
					<p>Page 5</p>
					<p>Page 6</p>
					<p>Page 7</p>
				</div>
		</div>
		
    )
}