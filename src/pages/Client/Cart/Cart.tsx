import "./Cart.css";
import { CartItem } from "../../../components/CartItem/CartItem";

export const Cart: React.FC = () => {
  return (
    <main className="cart-body">
      <h1 className="cart-heading">Cart</h1>
      <div className="cart-container">
        {[1, 2, 3, 4, 5].map(item => <CartItem key={item} />)}
      </div>
      <div className="cart-total">
        <p className="total-label">Total</p>
        <p className="total-value">$1000</p>
      </div>
      <div className="cart-controls">
        <button id="proceed-btn">Proceed to Checkout</button>
        <button id="continue-btn">Add more items</button>
        <button id="cancel-btn">Cancel Order</button>
      </div>
    </main >
  )
}

