import './MenuItem.css';
import Image from '../../assets/profile_pic.png';
import Item from '../../entities/MenuItem';

interface MenuItemProps {
  item: Item;
}


const MenuItem: React.FC<MenuItemProps> = ({ item }) => {

  const qtyInCart = 1;

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
        { qtyInCart === 0 ?
          <button className="cta-atc">+ Add to cart</button>
          : <div className='cart-ctrl-group'>
              <button className='cart-ctrl-btn'>+</button>
              <span className='cart-qty'>x{qtyInCart}</span>
              <button className='cart-ctrl-btn'>-</button>
            </div>
        }
      </div>
    </div>
  );

}

export default MenuItem;