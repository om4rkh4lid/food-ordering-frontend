import './App.css'
import companyLogo from './assets/talabat_logo.png';
import profilePicture from './assets/profile_pic.png';
import NavBar from './components/NavBar/NavBar'
import ClientContent from './pages/ClientContent/ClientContent';
import { useState } from 'react';
import { HTMLInputEvent } from './types';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: HTMLInputEvent) => {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <NavBar appLogoUrl={companyLogo} profilePicUrl={profilePicture} searchCallback={handleSearchChange} />
      <ClientContent query={searchQuery} />
    </>
  )
}

export default App
