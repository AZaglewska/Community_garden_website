import React, { useState, useEffect } from "react";
import Router from "../routing/Router";
import CommunityGardenContext from "../context/context";
import client from "../client/Client";

const Root = () => {
  const [homeArticles, setHomeArticles] = useState([]);

  const getHomeArticlesData = (dataArticles) => {
    let articlesData = dataArticles.map((dataArticle) => {
      const { id } = dataArticle.sys;

      const articleTitle = dataArticle.fields.articleTitle;
      const articleImage = dataArticle.fields.articleImage.fields.file.url;
      const articleDate = dataArticle.fields.articlesDate;
      const articleContent = [...dataArticle.fields.articles.content];

      const article = {
        id,
        articleTitle,
        articleImage,
        articleDate,
        articleContent,
      };
      return article;
    });

    setHomeArticles(articlesData);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "rodArticles",
        limit: 2,
      })

      .then((response) => {
        getHomeArticlesData(response.items);
      });
  }, []);

  return (
    <>
      <CommunityGardenContext.Provider value={{ homeArticles }}>
        <Router />
      </CommunityGardenContext.Provider>
    </>
  );
};

export default Root;
