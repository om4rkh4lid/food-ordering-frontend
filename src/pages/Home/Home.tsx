import './Home.css';

const Home: React.FC = () => {
  return (
    <main className="main-container">
      <div className="big-card" id="categories">
        <a href='facebook.com' className="card-outline">
          <div className="big-card-icon">
            <img src="https://blog.talabat.com/wp-content/uploads/2020/07/cropped-Talabat-New-Brand-Icon-2.png" />
          </div>
          <h3 className="big-card-heading">Categories</h3>
        </a>
      </div>
      <div className="big-card" id="categories">
        <a href='#' className="card-outline">
          <div className="big-card-icon">
            <img src="https://blog.talabat.com/wp-content/uploads/2020/07/cropped-Talabat-New-Brand-Icon-2.png" />
          </div>
          <h3 className="big-card-heading">Restaurants</h3>
        </a>
      </div>
    </main>
  )
};

export default Home;
