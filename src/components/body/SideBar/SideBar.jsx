import { React, useContext } from 'react';
import { SideContext } from '../../../context/SideBarContext/SideBarContext';
import { LabelContext } from '../../../context/LabelContext/LabelContext';
import SideBarModule from './SideBarModule/SideBarModule';
import SideBarButton from './SideBarButton/SideBarButton';
import './SideBar.css';

const SideBar = () => {
  const { sideBarData, setSideBarOpen } = useContext(SideContext)
  const {  setActiveLabelID } = useContext(LabelContext)
  const { modules, titleCourse, mentor } = sideBarData.card

  const handleCloseSideBar = () => {
    setSideBarOpen(false);
    setActiveLabelID(null);
  }
 
  return (
    <div className='SideBar'>
      <SideBarButton closeSideBar={handleCloseSideBar}/>
      <h3>Title Course: {titleCourse}</h3>
      <h3>Mentor: {mentor}</h3>
      <div>{modules.map(module => <SideBarModule key={module.id} data={module} />)}</div>
    </div>
  )
}

export default SideBar;