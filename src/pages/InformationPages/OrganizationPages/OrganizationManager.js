import React, { useContext } from "react";
import CommunityGardenContext from "../../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import gardenIcon from "../../../assets/Icons/gardening.svg";
import "./OrganizationManager.scss";

const OrganizationManager = () => {
  const context = useContext(CommunityGardenContext);

  const { infoArticles } = context;

  return (
    <>
      <div className="organization-background" />
      <div className="organization">
        <div className="organization__elements">
          <h1 className="organization__title">Organizacja działki</h1>
          <Link to={routes.informationManager} className="organization__link">
            Powrót do informacji
          </Link>
        </div>
        <div className="organization__wrapper">
          <div className="organization__image-wrapper">
            <img
              className="organization__image"
              src={gardenIcon}
              alt="garden"
            />
          </div>
          <ul className="organization__list">
            {infoArticles.map((infoArticle) => {
              const { id, infoTitle, infoImage } = infoArticle;
              return (
                <li key={id} className="organization__element">
                  <Link
                    to={{
                      pathname: `/organizacja/${infoTitle.replace(/\s/g, "")}`,
                      state: {
                        ...infoArticle,
                      },
                    }}
                    className="organization__element-link"
                  >
                    <img
                      src={infoImage}
                      className="organization__element-image"
                      alt="organization"
                    />
                    <p>{infoTitle}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrganizationManager;
