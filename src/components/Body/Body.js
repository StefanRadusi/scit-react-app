import React from 'react';
import { getPage } from './BodyUtils';

import './Body.css';


export function Body(props) {
  const Page = getPage(props.currentPage)

  return (
    <div className='app-body'>
      <Page />
    </div>
  )
}