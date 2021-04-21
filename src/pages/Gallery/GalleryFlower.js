import React, { useContext, useState } from "react";
import CommunityGardenContext from "../../context/context";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import gif from "../../assets/Gif/Rolling-1s-81px.svg";
import "./GalleryStyles.scss";

const GalleryFlower = () => {
  const context = useContext(CommunityGardenContext);

  const { picturesFlowers, loading } = context;

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = picturesFlowers.map((picture) => {
    return picture.image;
  });

  const findIndexOfPicture = (images, picture) => {
    let index = images.indexOf(picture);

    setPhotoIndex(index);
  };

  return (
    <>
      <div className="gallery">
        <div className="gallery__elements">
          <h1 className="gallery__title">Kwiaty</h1>
          <Link to={routes.gallery} className="gallery__link">
            Powrót do galerii
          </Link>
        </div>
        {loading ? (
          <ul className="gallery__pictures">
            {picturesFlowers.map((picture) => (
              <li
                key={picture.id}
                className="gallery__picture"
                onClick={() => {
                  setIsOpen(true);
                  findIndexOfPicture(images, picture.image);
                }}
              >
                <img
                  src={picture.image}
                  className="gallery-image"
                  alt="garden foto"
                />
                <div className="transparent-box"></div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="gallery__gif-container">
            <img src={gif} alt="spinner" />
          </div>
        )}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default GalleryFlower;
