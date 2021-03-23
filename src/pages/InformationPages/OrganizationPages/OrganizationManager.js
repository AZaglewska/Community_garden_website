import React, { useContext } from "react";
import CommunityGardenContext from "../../../context/context";
import "./OrganizationManager.scss";
import { Link } from "react-router-dom";
import GardenIcon from "../../../assets/Icons/gardening.svg";

const OrganizationManager = () => {
  const context = useContext(CommunityGardenContext);

  const { infoArticles } = context;

  return (
    <>
      <div className="organization">
        <h1 className="organization__title">Organizacja działki</h1>
        <div className="organization__wrapper">
          <img className="organization__image" src={GardenIcon} />
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
