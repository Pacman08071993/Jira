import React from 'react';
import Search from './Search/Search';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <Search/>
      <div>TotalItem</div>
    </div>
  )
}

export default Header;
