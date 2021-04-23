import React from "react";
import * as Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./FullArticle.scss";

const FullArticle = (props) => {
  const { image, title, date, text } = props.location.state;

  return (
    <>
      <div className="article-background" />
      <div className="full-article">
        <div className="full-article__elements">
          <h1 className="full-article__title">Aktualności</h1>
          <Link to={routes.articles} className="full-article__link">
            Powrót do artykułów
          </Link>
        </div>

        <div className="full-article__wraper">
          <img src={image} alt="articleImage" className="full-article__image" />
          <h3 className="full-article__subtitle">{title}</h3>
          <Markdown source={text} className="full-article__content" />
          <h4 className="full-article__date">
            Dodano: {`${date.slice(0, 10)}`}
          </h4>
        </div>
      </div>
    </>
  );
};

export default FullArticle;
