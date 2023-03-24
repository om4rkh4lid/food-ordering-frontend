import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import './Restaurants.css';

const Restaurants: React.FC = () => {
  return (
    <>
      <h1 className="main-heading">Restaurants</h1>
      <div className="restaurant-container">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
            return <RestaurantItem key={value}/>;
          })
        }
      </div>
    </>
  );
}

export default Restaurants;