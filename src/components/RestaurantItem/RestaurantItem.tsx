import './RestaurantItem.css';

const RestaurantItem: React.FC = () => {
  return (
    <div className="restaurant-item">
      <div className="restaurant-image">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">Golden Restaurant</h3>
        <ul className="restaurant-categories">
          <li>Shawerma</li>
          <li>Syrian</li>
          <li>Oriental</li>
        </ul>
        <p className="delivery-time">
          <em>Delivers in <strong>30 minutes</strong></em>
        </p>
      </div>
    </div>
  );
}

export default RestaurantItem;