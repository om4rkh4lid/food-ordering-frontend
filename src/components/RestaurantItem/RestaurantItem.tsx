import './RestaurantItem.css';
import Restaurant from '../../entities/Restaurant';

interface RestaurantItemProps {
  restaurant: Restaurant
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <div className="restaurant-item">
      <div className="restaurant-image">
        <img src={restaurant.photoUrl} />
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <ul className="restaurant-categories">
          {restaurant.categories.map(category => <li>{category}</li>)}
        </ul>
        <p className="delivery-time">
          <em>Delivers in <strong>{restaurant.deliveryTime} minutes</strong></em>
        </p>
      </div>
    </div>
  );
}

export default RestaurantItem;