import React, { useState, useEffect } from "react";
import Router from "../routing/Router";
import CommunityGardenContext from "../context/context";
import client from "../client/Client";

const Root = () => {
  const [homeArticles, setHomeArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [infoArticles, setInfoArticles] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  const [statuteData, setStatuteData] = useState([]);
  const [picturesFlowers, setPicturesFlowers] = useState([]);
  const [picturesHarvest, setPicturesHarvest] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPicturesHarvestData = (dataPictures) => {
    let pictures = dataPictures.map((dataPicture) => {
      const { id } = dataPicture.sys;

      const image = dataPicture.fields.harvestPicture[0].fields.file.url;

      const picture = { id, image };
      return picture;
    });

    setPicturesHarvest(pictures);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "rodPicturesHarvest",
      })
      .then((response) => {
        getPicturesHarvestData(response.items);
        console.log(response.items);
      });
  }, []);

  const getPicturesFlowersData = (dataPictures) => {
    let pictures = dataPictures.map((dataPicture) => {
      const { id } = dataPicture.sys;

      const image = dataPicture.fields.flowerPicture[0].fields.file.url;

      const picture = { id, image };
      return picture;
    });

    setPicturesFlowers(pictures);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "rodPicturesFlowers",
      })
      .then((response) => {
        setLoading(true);
        getPicturesFlowersData(response.items);
        console.log(response.items);
      });
  }, []);

  const getStatuteFile = (statuteDataElements) => {
    let mappedStatuteData = statuteDataElements.map((statuteDataElement) => {
      const { id } = statuteDataElement.sys;

      const statuteFile = statuteDataElement.fields.statuteFile.fields.file.url;
      const statuteName = statuteDataElement.fields.statuteName;
      const statuteIcon = statuteDataElement.fields.statuteIcon.fields.file.url;

      const statute = { id, statuteFile, statuteName, statuteIcon };
      return statute;
    });
    setStatuteData(mappedStatuteData);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "rodStatute",
      })
      .then((response) => {
        getStatuteFile(response.items);
        console.log(response.items);
      });
  }, []);

  const getPdfFile = (pdfDataElements) => {
    let mappedPdfs = pdfDataElements.map((pdfDataElement) => {
      const { id } = pdfDataElement.sys;

      const pdfLink = pdfDataElement.fields.pdfFile.fields.file.url;
      const pdfName = pdfDataElement.fields.pdfName;
      const pdfIcon = pdfDataElement.fields.pdfIcon.fields.file.url;

      const pdf = { id, pdfName, pdfLink, pdfIcon };
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
        value={{
          homeArticles,
          articles,
          infoArticles,
          pdfData,
          statuteData,
          picturesFlowers,
          picturesHarvest,
          loading,
        }}
      >
        <Router />
      </CommunityGardenContext.Provider>
    </>
  );
};

export default Root;
