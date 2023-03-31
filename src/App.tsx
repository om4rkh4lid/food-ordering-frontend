import './App.css'
import companyLogo from './assets/talabat_logo.png';
import profilePicture from './assets/profile_pic.png';
import NavBar from './components/NavBar/NavBar'
import ClientContent from './pages/ClientContent/ClientContent';

function App() {

  return (
    <>
      <NavBar appLogoUrl={companyLogo} profilePicUrl={profilePicture} />
      <ClientContent />
    </>
  )
}

export default App
