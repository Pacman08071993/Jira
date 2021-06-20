import React from 'react';
import Board from './Board/Board';
import SideBar from './SideBar/SideBar';
import './Body.css';

const Body = () => {
  return (
    <div className='Body'>
        <Board/>
        <SideBar/>
    </div>
  )
}

export default Body;