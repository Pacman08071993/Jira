import { React, useContext } from 'react';
import { SideContext } from '../../../../../context/SideBarContext/SideBarContext';
import { LabelContext } from '../../../../../context/LabelContext/LabelContext';
import './Module.css';

const Module = ({ data, card }) => {
  const {titleModule, id} = data

  const { setSideBarData, setSideBarOpen } = useContext(SideContext)
  const { activeLabelID, setActiveLabelID } = useContext(LabelContext)

  const handleSideBarCourse = e => {
    e.stopPropagation();

    setSideBarData({ card })
    setActiveLabelID(id)
    setSideBarOpen(true)
  }

  const active = activeLabelID === id ? 'activeModule' : ''

  return (
    <div className={`Module ${active}`} style={{active}} onClick={handleSideBarCourse}>
      <span>{titleModule}</span>
    </div>
  )
}

export default Module;