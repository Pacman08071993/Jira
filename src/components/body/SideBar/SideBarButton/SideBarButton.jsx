import { React } from 'react';
import './SideBarButton.css';

const SideBarButton = ({ closeSideBar }) => (
  <div className='SideBarButton' onClick={closeSideBar}>
    <div></div>
    <div></div>
  </div>
)

export default SideBarButton;