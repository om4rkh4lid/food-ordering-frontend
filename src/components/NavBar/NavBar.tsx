import { useState } from 'react';
import { ChangeEvent, SubmitEvent } from '../../types';
import CompanyLogo from '../../assets/talabat_logo.png';
import './NavBar.css';

interface NavBarProps {
  appLogoUrl: string;
  profilePicUrl: string;
  searchCallback: (query: string) => void;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleInputChange = (event: ChangeEvent) => {
    setSearchQuery(event.target.value);
  }

  const search = (event: SubmitEvent) =>  {
    event.preventDefault();
    props.searchCallback(searchQuery);
  }

  return (
    <nav className="navbar">
      <img className="app-logo" src={CompanyLogo} />
      <form className="search-group" onSubmit={search}>
        <input type="search" name="search" placeholder="Search here..." value={searchQuery} onChange={handleInputChange}/>
        <button type="submit">Search</button>
      </form>
      <div className="profile-pic">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      </div>
    </nav>
  );
};

export default NavBar;