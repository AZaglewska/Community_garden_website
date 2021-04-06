import React from "react";
import "./OrganizationElement.scss";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import * as Markdown from "react-markdown";

const OrganizationElement = (props) => {
  const {
    infoTitle,
    infoImage,
    infoSections,
    infoContentFirst,
    infoContentSecond,
    infoContentThird,
    infoContentFourth,
    infoContentFifth,
    infoContentSixth,
    infoContentSeventh,
  } = props.location.state;
  return (
    <>
      <div className="organization-element">
        <div className="organization-element__wrapper">
          <img className="organization-element__image" src={infoImage} />
          <h1 className="organization-element__title">{infoTitle}</h1>
          <Link
            to={routes.organizationManager}
            className="organization-element__link"
          >
            Powrót do organizacji działki
          </Link>
          <h3 className="organization-element__subtitle">Regulamin Rod:</h3>
          <div className="organization-element__content">
            <h4 className="organization-element__paragraph">
              {infoSections[0]}
            </h4>
            <Markdown
              source={infoContentFirst}
              className="organization-element__text"
            />
            <h4 className="organization-element__paragraph">
              {infoSections[1]}
            </h4>
            <Markdown
              source={infoContentSecond}
              className="organization-element__text"
            />
            <h4 className="organization-element__paragraph">
              {infoSections[2]}
            </h4>
            <Markdown
              source={infoContentThird}
              className="organization-element__text"
            />
            <h4 className="organization-element__paragraph">
              {infoSections[3]}
            </h4>
            <Markdown
              source={infoContentFourth}
              className="organization-element__text"
            />
            <h4 className="organization-element__paragraph">
              {infoSections[4]}
            </h4>
            <Markdown
              source={infoContentFifth}
              className="organization-element__text"
            />
            <h4 className="organization-element__paragraph">
              {infoSections[5]}
            </h4>
            <Markdown
              source={infoContentSixth}
              className="organization-element__text"
            />
            <h4 className="organization-element__paragraph">
              {infoSections[6]}
            </h4>
            <Markdown
              source={infoContentSeventh}
              className="organization-element__text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationElement;
