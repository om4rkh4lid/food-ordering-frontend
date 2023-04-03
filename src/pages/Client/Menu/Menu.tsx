import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import './Menu.css';
import MenuItem from '../../../components/MenuItem/MenuItem';
import Item from '../../../entities/MenuItem';

interface MenuProps {
  restaurantId: number;
}

const Menu: React.FC<MenuProps> = ({ restaurantId }) => {

  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');

  const fetchMenu = (id: number) => {
    const query = `{
      menu(restaurantId: ${id}) {
          id
          name
          price
          description
          photo
      }
    }`

    axiosInstance.post('/', { query })
    .then(response => {
      setMenu(response.data.menu);
      console.log(response.data.menu);
    })
    .catch(error => setError(error))

  }

  useEffect(() => {
    fetchMenu(restaurantId);
  }, []);

  return (
    <>
      <h1 className="main-heading">Restaurant's Menu</h1>
      <div className="menu-container">
        {menu && menu.map((item: Item) => {
          return <MenuItem key={item.id} item={item} />
          })}
      </div>
    </>
  );
}

export default Menu;