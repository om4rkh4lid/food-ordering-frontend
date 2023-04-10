import "./Cart.css";
import { CartItem } from "../../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axios";
import MenuItem from "../../../entities/MenuItem";

export const Cart: React.FC = () => {

  const navigate = useNavigate();
  const { cart, clear, getRestaurantId } = useCart();
  const [total, setTotal] = useState(0);
  const [restaurantId, setRestaurantId] = useState<number>(0);

  useEffect(() => {
    if (cart.length > 0) {
      const id = getRestaurantId();
      id && setRestaurantId(id);
    } else {
      navigate('/restaurants')
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const newTotal = cart.reduce((previous, current) => {
        previous += cart.find(item => item.spec.id === current.spec.id)!.spec.price * current.qty;
        return previous;
      }, 0)
      setTotal(newTotal);
    } else {
      setTotal(0);
    }
  }, [cart])


return (
  <main className="cart-body">
    <h1 className="cart-heading">Cart</h1>
    <div className="cart-container">
      {cart.map(item => <CartItem key={item.spec.id} item={item.spec} />)}
    </div>
    <div className="cart-total">
      <p className="total-label">Total</p>
      <p className="total-value">${total}</p>
    </div>
    <div className="cart-controls">
      { cart.length > 0 && <button onClick={() => { navigate('/checkout') }} id="proceed-btn">Proceed to Checkout</button>}
      <button onClick={() => { navigate(`/restaurants/${restaurantId}`)}} id="continue-btn">Add more items</button>
      { cart.length > 0 && <button onClick={() => {
        clear();
        navigate('/restaurants');
      }} id="cancel-btn">Cancel Order</button> }
    </div>
  </main >
)
}

