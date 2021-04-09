import React, { useContext } from "react";
import CommunityGardenContext from "../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import "./Articles.scss";

const Articles = () => {
  const context = useContext(CommunityGardenContext);

  const { articles, getMoreArticles, getLessArticles, articlesTotal } = context;

  return (
    <>
      <div className="articles-container">
        <h1 className="articles-container__title">Aktualności</h1>
        <Link to={routes.home} className="articles-container__link">
          Powrót do strony głównej
        </Link>
        <ul key="allArticlesList" className="articles">
          {articles.map((article) => {
            const {
              id,
              articleImage,
              articleTitle,
              articleContent,
              articleDate,
            } = article;

            return (
              <li key={id} className="articles__list">
                <img
                  src={articleImage}
                  alt="articleImage"
                  className="articles__image"
                />

                <h3 className="articles__title">{articleTitle}</h3>

                <p className="articles__content">
                  {articleContent[0].content[0].value.length < 20
                    ? articleContent[0].content[0].value
                    : `${articleContent[0].content[0].value.substring(
                        0,
                        150
                      )}...`}
                </p>
                <Link
                  to={{
                    pathname: `/artykuł/${articleTitle.replace(/\s/g, "")}`,
                    state: {
                      image: articleImage,
                      title: articleTitle,
                      content: articleContent,
                      date: articleDate,
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
            <button
              onClick={getLessArticles}
              className="articles-addons__button"
            >
              Załaduj mniej artukułów
            </button>
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
