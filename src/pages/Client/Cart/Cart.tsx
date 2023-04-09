import "./Cart.css";
import { CartItem } from "../../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axios";
import MenuItem from "../../../entities/MenuItem";

export const Cart: React.FC = () => {

  const navigate = useNavigate();
  const { cart, clear } = useCart();
  const [cartItems, setCartItems] = useState([] as MenuItem[]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const query = `{
        cartItems(idList: [${cart.map(item => item.id)}]){
          id,
          name,
          price,
          description,
          photo
        }
      }
      `
      axiosInstance.post('/', { query })
        .then(result => {
          const items: MenuItem[] = result.data.cartItems;
          setCartItems(items);
        })
        .catch(err => console.error(err.message));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0 && cartItems.length > 0) {
      const newTotal = cart.reduce((previous, current) => {
        previous += cartItems.find(item => item.id === current.id)!.price * current.qty;
        return previous;
      }, 0)
      setTotal(newTotal);
    }
  }, [cart, cartItems])


return (
  <main className="cart-body">
    <h1 className="cart-heading">Cart</h1>
    <div className="cart-container">
      {cartItems.map(item => <CartItem key={item.id} item={item} />)}
    </div>
    <div className="cart-total">
      <p className="total-label">Total</p>
      <p className="total-value">${total}</p>
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

