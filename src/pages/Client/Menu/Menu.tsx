import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import './Menu.css';
import MenuItem from '../../../components/MenuItem/MenuItem';
import Item from '../../../entities/MenuItem';
import { useParams } from 'react-router-dom';


const Menu: React.FC = () => {

  const { id } = useParams();
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
    })
    .catch(error => setError(error))

  }

  useEffect(() => {
    if (id) {
      const restaurantId = parseInt(id);
      restaurantId && fetchMenu(restaurantId);
    }
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