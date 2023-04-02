import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import './Menu.css';
import MenuItem from '../../../components/MenuItem/MenuItem';

const Menu: React.FC = () => {

  return (
    <>
      <h1 className="main-heading">Restaurant's Menu</h1>
      <div className="menu-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => <MenuItem key={value} />)}
      </div>
    </>
  );
}

export default Menu;