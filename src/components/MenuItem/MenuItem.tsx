import './MenuItem.css';
import Image from '../../assets/profile_pic.png';
import Item from '../../entities/MenuItem';

interface MenuItemProps {
  item: Item;
}


const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-image">
        <img src={item.photo || Image} />
      </div>
      <div className="item-info">
        <h3 className="restaurant-name">{item.name}</h3>
        <p className="item-description">
          <em>{item.description}</em>
        </p>
      </div>
      <div className="action-section">
        <div className="price">
          <p>${item.price}</p>
        </div>
        <button className="cta">+</button>
      </div>
    </div>
  );

}

export default MenuItem;