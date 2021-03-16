import React, { useContext } from "react";
import "./HomeArticles.scss";
import CommunityGardenContext from "../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../routes/index";

const HomeArticles = () => {
  const context = useContext(CommunityGardenContext);
  const { homeArticles } = context;

  return (
    <>
      <div className="article-container">
        <h1 className="article-container__title">Aktualności</h1>
        <ul key="articlesList" className="home-article">
          {homeArticles.map((article) => {
            const {
              articleImage,
              articleTitle,
              articleContent,
              articleDate,
              id,
            } = article;

            return (
              <li key={id} className="home-article__list">
                <img
                  src={articleImage}
                  alt="articleImage"
                  className="home-article__image"
                />

                <h3 className="home-article__title">{articleTitle}</h3>

                <p className="home-article__content">
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
                  <button className="home-article__button">
                    Czytaj więcej
                  </button>
                </Link>
                <h4 className="home-article__date">
                  Dodano: {`${articleDate.slice(0, 10)}`}
                </h4>
              </li>
            );
          })}
        </ul>
        <Link to={routes.articles}>
          <button className="article-container__button">
            Zobacz wszystkie aktualności
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeArticles;
