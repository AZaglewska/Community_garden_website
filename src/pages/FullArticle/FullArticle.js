import React from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import './FullArticle.scss';

const FullArticle = (props) => {
  const { image, title, date, text, doc } = props.location.state;

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
          {doc ? (
            <>
              <h3 className="article-docTitle">Dokumenty:</h3>
              <ul className="article-doc">
                {doc?.map((x) => {
                  const fileName = x.fields.file.fileName;
                  const fileUrl = x.fields.file.url;
                  return (
                    <li className="article-doc__element">
                      <h3 className="article-doc__title">{fileName}</h3>
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
          <h4 className="full-article__date">
            Dodano: {`${date.slice(0, 10)}`}
          </h4>
        </div>
      </div>
    </>
  );
};

export default FullArticle;
