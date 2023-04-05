import Restaurants from "../Restaurants/Restaurants";
import Menu from "../Menu/Menu";
import { Outlet, Route } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../../../components/NavBar/NavBar";
import companyLogo from "../../../assets/talabat_logo.png";
import profilePicture from "../../../assets/profile_pic.png";
import { useState } from "react";


const ClientContent: React.FC = () => {

  return (
    <>
      <NavBar appLogoUrl={companyLogo} profilePicUrl={profilePicture} />
      <Outlet />
    </>
  );
};

export default ClientContent;
