import { React, useContext } from 'react';
import { LabelContext } from '../../../../context/LabelContext/LabelContext';
import './SideBarModule.css';

const SideBarModule = ({ data }) => {
  const { id, titleModule, status } = data
  const { activeLabelID, setActiveLabelID } = useContext(LabelContext)

  const handleActiveLabelOnClick = () => {
    setActiveLabelID(id)
  }

  const active = activeLabelID === id ? 'activeSideBarModule' : ''

  return(
    <div className={`SideBarModule ${active}`} onClick={handleActiveLabelOnClick}>
      <div>{titleModule}</div>
      <div>{status}</div>
    </div>
  )
}

export default SideBarModule;