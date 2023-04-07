import "./CartItem.css";
import companyLogo from "../../assets/talabat_logo.png";

export const CartItem: React.FC = () => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={companyLogo} />
      </div>
      <div className="item-info">
        <p className="item-name">Name</p>
        <div className='cart-ctrl-group'>
          <button className='cart-ctrl-btn' onClick={() => { }}>+</button>
          <span className='cart-qty'>x2</span>
          <button className='cart-ctrl-btn' onClick={() => { }}>-</button>
        </div>
      </div>
      <div className="action-section">
        <div className="price"><p>$100</p></div>
        <button className="remove">X</button>
      </div>
    </div>
  );
}