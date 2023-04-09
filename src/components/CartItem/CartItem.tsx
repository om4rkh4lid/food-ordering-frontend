import "./CartItem.css";
import MenuItem from "../../entities/MenuItem";
import { useCart } from "../../hooks/useCart";
type CartItemProps = {
  item: MenuItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem, incrementItem, decrementItem, getItemQty } = useCart();

  return (
    <div className="ci-cart-item">
      <div className="ci-item-image">
        <img src={item.photo} />
      </div>
      <div className="ci-item-info">
        <p className="ci-item-name">{item.name}</p>
        <div className='ci-cart-ctrl-group'>
          <button className='ci-cart-ctrl-btn' onClick={() => { incrementItem(item.id) }}>+</button>
          <span className='ci-cart-qty'>x{getItemQty(item.id)}</span>
          <button className='ci-cart-ctrl-btn' onClick={() => { decrementItem(item.id) }}>-</button>
        </div>
      </div>
      <div className="ci-action-section">
        <div className="ci-price"><p>${getItemQty(item.id) * item.price}</p></div>
        <button onClick={() => removeItem(item.id)} className="ci-remove">X</button>
      </div>
    </div>
  );
}