import React, { useContext } from "react";
import Navbar from "../components/navigation/Navbar/Navbar";
import Footer from "../components/navigation/Footer/Footer";
import CommunityGardenContext from "../context/context";
import { animateScroll as scroll } from "react-scroll";
import "./MainTemplate.scss";
import arrowUpIcon from "../assets/Icons/up-arrow-site.svg";

const MainTemplate = ({ children }) => {
  const context = useContext(CommunityGardenContext);
  const { showArrowTop, isHamburgerMenuOpen } = context;
  return (
    <>
      <Navbar />
      {showArrowTop && isHamburgerMenuOpen === false ? (
        <img
          src={arrowUpIcon}
          className="arrowUp"
          onClick={() => scroll.scrollToTop()}
          alt="arrow"
        />
      ) : null}
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
