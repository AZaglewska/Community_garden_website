import React, { useContext } from 'react';
import CommunityGardenContext from '../../context/context';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/index';
import './HomeArticles.scss';

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
              articleText,
              articleDate,
              id,
              articleDoc,
            } = article;

            return (
              <li key={id} className="home-article__list">
                <img
                  src={articleImage}
                  alt="articleImage"
                  className="home-article__image"
                />

                <h3 className="home-article__title">{articleTitle}</h3>
                {articleText.length < 300 ? (
                  <>
                    <Markdown
                      source={articleText}
                      className="articles__content"
                    />
                    {articleDoc ? (
                      <>
                        <h3 className="article-docTitle">Dokumenty:</h3>
                        <ul className="article-doc">
                          {articleDoc?.map((x) => {
                            const fileName = x.fields.file.fileName;
                            const fileUrl = x.fields.file.url;
                            return (
                              <li className="article-doc__element">
                                <h3 className="article-doc__title">
                                  {fileName}
                                </h3>
                                <a
                                  href={fileUrl}
                                  target="_blank"
                                  className="article-doc__doc"
                                  rel="noreferrer"
                                >
                                  {fileName.substr(fileName.indexOf('.'))}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      ''
                    )}
                  </>
                ) : (
                  <Markdown
                    source={`${articleText.substring(0, 300)}...`}
                    className="articles__content"
                  />
                )}
                <Link
                  to={{
                    pathname: `/artykuł/${articleTitle.replace(/\s/g, '')}`,
                    state: {
                      image: articleImage,
                      title: articleTitle,
                      text: articleText,
                      date: articleDate,
                      doc: articleDoc,
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
