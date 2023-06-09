import Restaurants from "../Restaurants/Restaurants";
import Menu from "../Menu/Menu";
import { Outlet, Route } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../../../components/NavBar/NavBar";
import companyLogo from "../../../assets/talabat_logo.png";
import profilePicture from "../../../assets/profile_pic.png";
import { CartProvider } from "../../../contexts/CartContext";


const ClientContent: React.FC = () => {

  return (
    <CartProvider>
      <NavBar appLogoUrl={companyLogo} profilePicUrl={profilePicture} />
      <Outlet />
    </CartProvider>
  );
};

export default ClientContent;
