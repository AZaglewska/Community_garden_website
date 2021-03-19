import React from "react";
import Navbar from "../components/navigation/Navbar/Navbar";
import Footer from "../components/navigation/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
