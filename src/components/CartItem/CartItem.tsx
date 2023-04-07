import "./CartItem.css";
import companyLogo from "../../assets/talabat_logo.png";

export const CartItem: React.FC = () => {
  return (
    <div className="ci-cart-item">
      <div className="ci-item-image">
        <img src={companyLogo} />
      </div>
      <div className="ci-item-info">
        <p className="ci-item-name">Name</p>
        <div className='ci-cart-ctrl-group'>
          <button className='ci-cart-ctrl-btn' onClick={() => { }}>+</button>
          <span className='ci-cart-qty'>x2</span>
          <button className='ci-cart-ctrl-btn' onClick={() => { }}>-</button>
        </div>
      </div>
      <div className="ci-action-section">
        <div className="ci-price"><p>$100</p></div>
        <button className="ci-remove">X</button>
      </div>
    </div>
  );
}