import "./CartItem.css";
import companyLogo from "../../assets/talabat_logo.png";
import { CartItem as CartItemType } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import MenuItem from "../../entities/MenuItem";
import { useCart } from "../../hooks/useCart";
type CartItemProps = {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {

  const [menuItem, setMenuItem] = useState({} as MenuItem);
  const { removeItem, incrementItem, decrementItem } = useCart();

  useEffect(() => {
    const query = `{
      menuItem(itemId: ${item.id}){
        id
        name
        price
        photo
        description
      }
    }`
    axiosInstance.post('/', { query })
      .then(result => {
        const item = result.data.menuItem;
        setMenuItem(new MenuItem(item.id, item.name, item.price, item.description, item.photo));
      })
      .catch(err => console.error(err));

  }, []);

  return (
    <div className="ci-cart-item">
      <div className="ci-item-image">
        <img src={menuItem.photo} />
      </div>
      <div className="ci-item-info">
        <p className="ci-item-name">{menuItem.name}</p>
        <div className='ci-cart-ctrl-group'>
          <button className='ci-cart-ctrl-btn' onClick={() => { incrementItem(menuItem.id) }}>+</button>
          <span className='ci-cart-qty'>x{item.qty}</span>
          <button className='ci-cart-ctrl-btn' onClick={() => { decrementItem(menuItem.id) }}>-</button>
        </div>
      </div>
      <div className="ci-action-section">
        <div className="ci-price"><p>${item.qty * menuItem.price}</p></div>
        <button onClick={() => removeItem(menuItem.id)} className="ci-remove">X</button>
      </div>
    </div>
  );
}