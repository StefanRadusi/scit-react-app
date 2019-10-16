import React from 'react';
import './ContentApp.css';


export function ContentApp(props) {
  console.log(props);

  const cssStyle = {fontSize: props.fontSize};
  const classNameString = 'container';

  return (<div className='content-app'>
    <div className={classNameString}>
      <input/>
      <p style={cssStyle} className={props.showDecoration && 'showDec'}>{props.text}</p>
</div>
  </div>)
}