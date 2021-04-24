import React from "react";
import HomeArticles from "../HomeArticles/HomeArticles";
import frontImage from "../../assets/Images/HomeImages/pexels-hannah-smid-3914608.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-background" />
        <div className="home__wraper">
          <h1 className="home__title">
            Rodzinny Ogród Działkowy <span>Warszawianka</span>
          </h1>
          <div className="home__elements">
            <p className="home__text">
              ROD Warszawianka przy ul. Piaseczyńskiej 60/66 na Mokotowie
              istnieje od kilkudziesięciu lat. Ogródki Działkowe Warszawianka
              położone są nieopodal pięknego Parku Arkadia i zespołu pałacowego
              Królikarnia a także obiektów Klubu Sportowego Warszawianka. Teren
              ogródków działkowych to miejsce różnorodnych upraw oraz odpoczynku
              i rekreacji dla działkowców, ich rodzin i przyjaciół, a także
              okolicznych mieszkańców.
            </p>
            <img className="home__image" src={frontImage} alt="flower" />
          </div>
        </div>
      </div>
      <HomeArticles />
    </>
  );
};

export default Home;
