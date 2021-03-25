import React, { useState, useEffect } from "react";
import Router from "../routing/Router";
import CommunityGardenContext from "../context/context";
import client from "../client/Client";

const Root = () => {
  const [homeArticles, setHomeArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [infoArticles, setInfoArticles] = useState([]);
  const [pdfData, setPdfData] = useState([]);

  const getPdfFile = (pdfDatas) => {
    let mappedPdfs = pdfDatas.map((pdfData) => {
      const { id } = pdfData.sys;

      const pdfLink = pdfData.fields.pdfFile.fields.file.url;
      const pdfName = pdfData.fields.pdfName;
      const pdfIcon = pdfData.fields.pdfIcon.fields.file.url;

      const pdf = { id, pdfName, pdfLink, pdfIcon};
      return pdf;
    });
    setPdfData(mappedPdfs);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "rodPdf",
      })
      .then((response) => {
        getPdfFile(response.items);
        console.log(response.items);
      });
  }, []);

  const getInfoData = (InfoDataArticles) => {
    let mappedInfoArticles = InfoDataArticles.map((InfoDataArticle) => {
      const { id } = InfoDataArticle.sys;

      const infoTitle = InfoDataArticle.fields.infoTitle;
      const infoImage = InfoDataArticle.fields.infoImage.fields.file.url;
      const infoSections = InfoDataArticle.fields.infoSections;
      const infoContentFirst = InfoDataArticle.fields.infoContentFirst;
      const infoContentSecond = InfoDataArticle.fields.infoContentSecond;
      const infoContentThird = InfoDataArticle.fields.infoContentThird;
      const infoContentFourth = InfoDataArticle.fields.infoContentFourth;
      const infoContentFifth = InfoDataArticle.fields.infoContentFifth;
      const infoContentSixth = InfoDataArticle.fields.infoContentSixth;
      const infoContentSeventh = InfoDataArticle.fields.infoContentSeventh;

      const infoData = {
        id,
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
      };
      return infoData;
    });

    setInfoArticles(mappedInfoArticles);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "rodInfo",
      })

      .then((response) => {
        getInfoData(response.items);
        console.log(response);
      });
  }, []);

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

  const getAllArticlesData = (dataArticles) => {
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

    setArticles(articlesData);
  };
  useEffect(() => {
    client
      .getEntries({
        content_type: "rodArticles",
      })

      .then((response) => {
        getAllArticlesData(response.items);
      });
  }, []);

  return (
    <>
      <CommunityGardenContext.Provider
        value={{ homeArticles, articles, infoArticles, pdfData }}
      >
        <Router />
      </CommunityGardenContext.Provider>
    </>
  );
};

export default Root;
