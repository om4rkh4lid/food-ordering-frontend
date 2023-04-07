import "./Cart.css";
import { CartItem } from "../../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

export const Cart: React.FC = () => {

  const navigate = useNavigate();
  const { cart, clear } = useCart();

  return (
    <main className="cart-body">
      <h1 className="cart-heading">Cart</h1>
      <div className="cart-container">
        {cart.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <div className="cart-total">
        <p className="total-label">Total</p>
        <p className="total-value">$1000</p>
      </div>
      <div className="cart-controls">
        <button onClick={() => { navigate('/checkout') }} id="proceed-btn">Proceed to Checkout</button>
        <button id="continue-btn">Add more items</button>
        <button onClick={() => {
          clear();
          navigate('/restaurants');
        }} id="cancel-btn">Cancel Order</button>
      </div>
    </main >
  )
}

