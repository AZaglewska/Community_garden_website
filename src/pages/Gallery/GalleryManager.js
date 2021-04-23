import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import Image1 from "../../assets/Images/GalleryImages/Image_1.jpg";
import Image2 from "../../assets/Images/GalleryImages/Image_2.jpg";
import "./GalleryManager.scss";

const GalleryManager = () => {
  return (
    <>
      <div className="gallery-background" />
      <div className="gallery-elements">
        <h1 className="gallery-elements__title">Galeria</h1>
        <Link to={routes.home} className="gallery-elements__link">
          Powrót do strony głównej
        </Link>
      </div>
      <div className="gallery-content">
        <div className="gallery-manager">
          <Link to={routes.galleryFlower} className="gallery-manager__link">
            <div className="gallery-manager__container">
              <img src={Image1} alt="flower" />
            </div>
            <h1 className="gallery-manager__title">Kwiaty</h1>
          </Link>
        </div>
        <div className="gallery-manager">
          <Link to={routes.galleryHarvest} className="gallery-manager__link">
            <div className="gallery-manager__container">
              <img src={Image2} alt="apple tree" />
            </div>
            <h1 className="gallery-manager__title">Zbiory </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GalleryManager;
