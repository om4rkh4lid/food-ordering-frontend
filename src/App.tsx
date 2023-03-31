import './App.css'
import companyLogo from './assets/talabat_logo.png';
import profilePicture from './assets/profile_pic.png';
import NavBar from './components/NavBar/NavBar'
import ClientContent from './pages/ClientContent/ClientContent';
import { useState } from 'react';
import { SubmitEvent } from './types';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const searchCallback = (query: string) => {
    setSearchQuery(query);
  }

  return (
    <>
      <NavBar appLogoUrl={companyLogo} profilePicUrl={profilePicture} searchCallback={searchCallback} />
      <ClientContent searchQuery={searchQuery} />
    </>
  )
}

export default App
