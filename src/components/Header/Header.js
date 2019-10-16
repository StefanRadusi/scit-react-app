import React from 'react';

function handleClick(event) {
  console.log('I clicked on p', event.currentTarget);
}

export function Header() {
  return (<div className='header'><p onClick={handleClick}>this is the header</p></div>);
}

