import { React, useContext } from 'react';
import { SideContext } from '../../../../context/SideBarContext/SideBarContext';
import { LabelContext } from '../../../../context/LabelContext/LabelContext';
import Module from './Module/Module';
import './Card.css';

const Card = ({ data }) => {
  const { mentor, titleCourse, modules, id } = data
  const card = data
  const { setSideBarOpen, setSideBarData } = useContext(SideContext)
  const { setActiveLabelID } = useContext(LabelContext)

  const handleCourseSideBar = () => {
    setActiveLabelID(null);
    setSideBarData({card})
    setSideBarOpen(true)
  }

  return(
  <div className='Card' onClick={handleCourseSideBar}>
    <h3>Title: {titleCourse}</h3>
    <h3>Mentor: {mentor}</h3>
    <div>
      {!!modules
       && modules.map(module => <Module key={module.id} card={data} data={module}/>)}
    </div>
  </div>
  )
}

export default Card;