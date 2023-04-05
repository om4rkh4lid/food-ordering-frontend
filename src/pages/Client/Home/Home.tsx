import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <main className="main-container">
      <div className="big-card" id="categories">
        <Link to={{pathname: '/categories'}} className="card-outline">
          <div className="big-card-icon">
            <img src="https://blog.talabat.com/wp-content/uploads/2020/07/cropped-Talabat-New-Brand-Icon-2.png" />
          </div>
          <h3 className="big-card-heading">Categories</h3>
        </Link>
      </div>
      <div className="big-card" id="restaurants">
        <Link to={{pathname: '/restaurants'}} className="card-outline">
          <div className="big-card-icon">
            <img src="https://blog.talabat.com/wp-content/uploads/2020/07/cropped-Talabat-New-Brand-Icon-2.png" />
          </div>
          <h3 className="big-card-heading">Restaurants</h3>
        </Link>
      </div>
    </main>
  )
};

export default Home;
