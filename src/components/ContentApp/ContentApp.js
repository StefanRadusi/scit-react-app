import React from 'react';
import './ContentApp.css';

function handleClick(event) {
    console.log('i clicked on p', event.target);
}
function ContentApp() {
    return (
    <div className="ContentApp">
        <input type="text"  />
        <p onClick={handleClick}>Search</p>
    </div>
    );
}

export default ContentApp;