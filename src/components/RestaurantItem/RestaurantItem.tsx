import './RestaurantItem.css';
import Restaurant from '../../entities/Restaurant';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface RestaurantItemProps {
  restaurant: Restaurant
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <Link className='restaurant-item' to={{ pathname: `${restaurant.restaurantId}` }} >
        <div className="restaurant-image">
          <img src={restaurant.photoUrl} />
        </div>
        <div className="restaurant-info">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <ul className="restaurant-categories">
            {restaurant.categories.map((category, index) => <li key={index}>{category}</li>)}
          </ul>
          <p className="delivery-time">
            <em>Delivers in <strong>{restaurant.deliveryTime} minutes</strong></em>
          </p>
        </div>
    </Link>
  );
}

export default RestaurantItem;