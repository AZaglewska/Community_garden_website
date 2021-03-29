import React, { useContext } from "react";
import CommunityGardenContext from "../../../context/context";
import "./Statute.scss";

const Regulations = () => {
  const context = useContext(CommunityGardenContext);

  const { statuteData } = context;

  return (
    <>
      <div className="statute">
        <h1 className="statute__title">Regulamin</h1>
        <div className="statute__wrapper">
          <ul className="statute__list">
            {statuteData.map((statuteDataElement) => {
              const { id, statuteIcon, statuteFile } = statuteDataElement;
              return (
                <li key={id} className="statute__element">
                  <img src={statuteIcon} className="statute__icon" />
                  <a
                    href={statuteFile}
                    target="_blank"
                    className="statute__file"
                  >
                    Regulamin.pdf
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Regulations;
