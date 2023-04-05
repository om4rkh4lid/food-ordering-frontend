import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axios';
import RestaurantItem from '../../../components/RestaurantItem/RestaurantItem';
import Restaurant from '../../../entities/Restaurant';
import './Restaurants.css';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Restaurants: React.FC = () => {

  const [searchParams] = useSearchParams();
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const fetch = (query: string) => {
    axiosInstance.post('/', { query })
      .then(response => {
        const dataName = Object.keys(response.data)[0];
        setRestaurants(response.data[dataName]);
      })
      .catch(error => setError(error));
  }

  const fetchAll = () => {
    const query = `{
      allRestaurants {
        restaurantId
        name
        deliveryTime
        categories
        photoUrl
      }
    }`;
    fetch(query);
  };

  const searchFor = (searchQuery: string) => {
    const query = `{
      restaurantsWithNameLike(nameQuery: "${searchQuery}") {
        restaurantId
        name
        deliveryTime
        categories
        photoUrl
      }
    }`;
    fetch(query);
    console.log('searching for', searchQuery);
  }

  useEffect(() => {
    const searchQuery = searchParams.get('name');
    searchQuery ? searchFor(searchQuery) : fetchAll();
  }, [searchParams]);

  return (
    <>
      <h1 className="main-heading">Restaurants</h1>
      <div className="restaurant-container">
        {
          restaurants.map((restaurant: Restaurant) => {
            return <RestaurantItem key={restaurant.name} restaurant={restaurant} />;
          })
        }
      </div>
    </>
  );
}

export default Restaurants;