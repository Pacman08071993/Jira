import { React, useState } from 'react';
import SideBarContext from '../../context/SideBarContext/SideBarContext';
import LabelProvider from '../../context/LabelContext/LabelContext';
import Board from './Board/Board';
import SideBar from './SideBar/SideBar';
import './Body.css';

const Body = () => {
  const [isOpenSideBar, setSideBarOpen] = useState(false)
  const [sideBarData, setSideBarData] = useState(null);
  const [activeLabelID, setActiveLabelID] = useState(null)

  return (
    <div className='Body'>
      <SideBarContext context={{ isOpenSideBar, setSideBarOpen, sideBarData, setSideBarData }}>
        <LabelProvider context={{ activeLabelID, setActiveLabelID }}>
          <Board/>
          {!!isOpenSideBar && <SideBar/>}
        </LabelProvider>
      </SideBarContext>
    </div>
  )
}

export default Body;