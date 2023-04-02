import './MenuItem.css';
import Image from '../../assets/talabat_logo.png';

const MenuItem: React.FC = () => {
  return (
    <div className="menu-item">
      <div className="item-image">
        <img src={Image} />
      </div>
      <div className="item-info">
        <h3 className="restaurant-name">Fried Chicken</h3>
        <p className="item-description">
          <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan euismod efficitur. Fusce imperdiet a leo et tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</em>
        </p>
      </div>
      <div className="action-section">
        <div className="price">
          <p>$9989.99</p>
        </div>
        <button className="cta">+</button>
      </div>
    </div>
  );

}

export default MenuItem;