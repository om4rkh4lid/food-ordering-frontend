import { HTMLInputEvent } from '../../types';
import './NavBar.css';

interface NavBarProps {
  appLogoUrl: string;
  profilePicUrl: string;
  searchCallback: (event: HTMLInputEvent) => void;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <nav className="navbar">
      <img className="app-logo" src="https://blog.talabat.com/wp-content/uploads/2020/07/cropped-Talabat-New-Brand-Icon-2.png" />
      <div className="search-group">
        <input type="search" name="search" placeholder="Search here..." />
        <button type="submit">Search</button>
      </div>
      <div className="profile-pic">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      </div>
    </nav>
  );
};

export default NavBar;