import React, { useState, useEffect } from "react";
import "./DynamicImage.scss";

const DynamicImage = () => {
  const imagesArray = [
    "https://images.pexels.com/photos/17666/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/334978/pexels-photo-334978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1675211/pexels-photo-1675211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/4080907/pexels-photo-4080907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3220350/pexels-photo-3220350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://cdn.pixabay.com/photo/2016/07/20/20/08/strawberry-1531216_1280.jpg",
    "https://images.pexels.com/photos/1144033/pexels-photo-1144033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1251397/pexels-photo-1251397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];

  const [images] = useState(imagesArray);
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

    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }
    setCurrentImg(newCurrentImg);
  };
  const urlString = `url('${images[currentImg]}')`;

  return (
    <div className="dynamicImage" style={{ backgroundImage: urlString }}></div>
  );
};

export default DynamicImage;
