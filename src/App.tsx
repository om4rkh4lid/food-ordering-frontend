import './App.css'
import companyLogo from './assets/talabat_logo.png';
import profilePicture from './assets/profile_pic.png';
import NavBar from './components/NavBar/NavBar'
import Restaurants from './pages/Restaurants/Restaurants';

function App() {

  return (
    <>
      <NavBar appLogoUrl={companyLogo} profilePicUrl={profilePicture} />
      <Restaurants />
    </>
  )
}

export default App
