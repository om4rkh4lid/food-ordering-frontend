import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import Restaurant from '../../entities/Restaurant';
import './Restaurants.css';

const Restaurants: React.FC = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = `{
      allRestaurants {
        restaurantId
        name
        deliveryTime
        categories
      }
    }`;

    axiosInstance.post('/', { query })
    .then(response => {
      console.log(response.data.allRestaurants);
      setRestaurants(response.data.allRestaurants)
    })
    .catch(error => setError(error));
  }, []);

  return (
    <>
      <h1 className="main-heading">Restaurants</h1>
      <div className="restaurant-container">
        {
          restaurants.map((restaurant: Restaurant) => {
            return <RestaurantItem key={restaurant.restaurauntId} restaurant={restaurant}/>;
          })
        }
      </div>
    </>
  );
}

export default Restaurants;