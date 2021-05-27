import React, { useContext } from "react";
import CommunityGardenContext from "../../context/context";
import * as Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./Articles.scss";

const Articles = () => {
  const context = useContext(CommunityGardenContext);

  const { articles, getMoreArticles, hideMoreArticles, articlesTotal } =
    context;

  return (
    <>
      <div className="articles-background" />
      <div className="articles-container">
        <div className="articles-container__elements">
          <h1 className="articles-container__title">Aktualności</h1>
          <Link to={routes.home} className="articles-container__link">
            Powrót do strony głównej
          </Link>
        </div>

        <ul key="allArticlesList" className="articles">
          {articles.map((article) => {
            const { id, articleImage, articleTitle, articleDate, articleText } =
              article;

            return (
              <li key={id} className="articles__list">
                <img
                  src={articleImage}
                  alt="articleImage"
                  className="articles__image"
                />

                <h3 className="articles__title">{articleTitle}</h3>
                <Markdown
                  source={
                    articleText.length < 380
                      ? articleText
                      : `${articleText.substring(0, 300)}...`
                  }
                  className="articles__content"
                />
                <Link
                  to={{
                    pathname: `/artykuł/${articleTitle.replace(/\s/g, "")}`,
                    state: {
                      image: articleImage,
                      title: articleTitle,
                      date: articleDate,
                      text: articleText,
                    },
                  }}
                >
                  <button className="articles__button">Czytaj więcej</button>
                </Link>
                <h4 className="articles__date">
                  Dodano: {`${articleDate.slice(0, 10)}`}
                </h4>
              </li>
            );
          })}
        </ul>
        {articlesTotal === articles.length ? (
          <div className="articles-addons">
            <p className="articles-addons__info">Nie ma więcej artykułów</p>

            {articlesTotal === 2 ? (
              ""
            ) : (
              <button
                onClick={hideMoreArticles}
                className="articles-addons__button"
              >
                Zwiń artykuły
              </button>
            )}
          </div>
        ) : (
          <button onClick={getMoreArticles} className="articles-addons__button">
            Załaduj więcej artykułów
          </button>
        )}
      </div>
    </>
  );
};

export default Articles;
