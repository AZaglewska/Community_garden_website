import React, { useContext } from 'react';
import CommunityGardenContext from '../../../context/context';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import './Statute.scss';

const Statute = () => {
  const context = useContext(CommunityGardenContext);

  const { statuteData, feeData } = context;

  return (
    <>
      <div className="statute-background" />
      <div className="statute">
        <div className="statute__elements">
          <h1 className="statute__title">Regulamin i Opłaty</h1>
          <Link to={routes.informationManager} className="statute__link">
            Powrót do informacji
          </Link>
        </div>
        <div className="statute__wrapper">
          <ul className="statute__list">
            {statuteData.map((statuteDataElement) => {
              const { id, statuteIcon, statuteFile, statuteName } =
                statuteDataElement;
              return (
                <li key={id} className="statute__element">
                  <img
                    src={statuteIcon}
                    className="statute__icon"
                    alt="statute"
                  />
                  <h3 className="statute__subtitle">{statuteName}</h3>
                  <a
                    href={statuteFile}
                    target="_blank"
                    className="statute__file"
                    rel="noreferrer"
                  >
                    Regulamin.pdf
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="prices">
            {feeData.map((fee) => {
              const { id, feeTitle, feeContent, feeText, feeNumber, feeInfo } =
                fee;
              return (
                <li key={id} className="prices__list">
                  <h4 className="prices__title">{feeTitle}</h4>
                  <Markdown source={feeContent} />
                  <Markdown source={feeText} className="prices__subtitle" />
                  <p className="prices__text">{feeNumber}</p>
                  <Markdown source={feeInfo} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Statute;
