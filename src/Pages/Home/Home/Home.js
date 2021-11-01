import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Porofolio from "../Portfolio/Porofolio";
import TourPackage from "../TourPackage/TourPackage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPackage></TourPackage>
      <About></About>
      <Porofolio></Porofolio>
    </div>
  );
};

export default Home;
