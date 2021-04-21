import React, { useState, useEffect } from "react";
import { imagesArray } from "./imagesArray";
import "./DynamicImage.scss";

const DynamicImage = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => changeBackgroundImage(), 10000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const changeBackgroundImage = () => {
    let newCurrentImg = 0;

    const noOfImages = imagesArray.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }
    setCurrentImg(newCurrentImg);
  };
  const urlString = `url('${imagesArray[currentImg]}')`;

  return (
    <div className="dynamicImage" style={{ backgroundImage: urlString }} />
  );
};

export default DynamicImage;
