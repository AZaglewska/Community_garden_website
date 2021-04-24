import React, { useState, useEffect } from "react";
import Router from "../routing/Router";
import CommunityGardenContext from "../context/context";
import client from "../client/Client";
import { pictureTypes } from "../types/pictureTypes";
import { contentfulContentTypes } from "../types/contentfulContentTypes";
import { articlesTypes } from "../types/articlesTypes";

const Root = () => {
  const [homeArticles, setHomeArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [infoArticles, setInfoArticles] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  const [statuteData, setStatuteData] = useState([]);
  const [picturesFlowers, setPicturesFlowers] = useState([]);
  const [picturesHarvest, setPicturesHarvest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articleLimit, setArticleLimit] = useState(2);
  const [articlesTotal, setArticlesTotal] = useState(0);
  const [showArrowTop, setShowArrowTop] = useState(false);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const closeHamburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const showAndHideArrowTop = () => {
    if (!showArrowTop && window.pageYOffset > 400) {
      setShowArrowTop(true);
    } else if (showArrowTop && window.pageYOffset <= 400) {
      setShowArrowTop(false);
    }
  };

  window.addEventListener("scroll", showAndHideArrowTop);

  const getPictureData = (pictureType, dataPictures) => {
    const pictures = dataPictures.map((dataPicture) => {
      const { id } = dataPicture.sys;
      const image = dataPicture.fields[pictureType][0].fields.file.url;

      const picture = { id, image };
      return picture;
    });

    if (pictureType === pictureTypes.harvest) {
      setPicturesHarvest([...pictures]);
    } else {
      setPicturesFlowers([...pictures]);
    }
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodPicturesHarvest,
      })
      .then((response) => {
        getPictureData(pictureTypes.harvest, response.items);
      });
  }, []);

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodPicturesFlowers,
      })
      .then((response) => {
        setLoading(true);
        getPictureData(pictureTypes.flower, response.items);
      });
  }, []);

  const getStatuteFile = (statuteDataElements) => {
    const mappedStatuteData = statuteDataElements.map((statuteDataElement) => {
      const { id } = statuteDataElement.sys;

      const statuteFile = statuteDataElement.fields.statuteFile.fields.file.url;
      const statuteName = statuteDataElement.fields.statuteName;
      const statuteIcon = statuteDataElement.fields.statuteIcon.fields.file.url;

      const statute = { id, statuteFile, statuteName, statuteIcon };
      return statute;
    });
    setStatuteData([...mappedStatuteData]);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodStatute,
      })
      .then((response) => {
        getStatuteFile(response.items);
      });
  }, []);

  const getPdfFile = (pdfDataElements) => {
    const mappedPdfs = pdfDataElements.map((pdfDataElement) => {
      const { id } = pdfDataElement.sys;

      const pdfLink = pdfDataElement.fields.pdfFile.fields.file.url;
      const pdfName = pdfDataElement.fields.pdfName;
      const pdfIcon = pdfDataElement.fields.pdfIcon.fields.file.url;

      const pdf = { id, pdfName, pdfLink, pdfIcon };
      return pdf;
    });
    setPdfData([...mappedPdfs]);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodPdf,
      })
      .then((response) => {
        getPdfFile(response.items);
      });
  }, []);

  const getInfoData = (infoDataArticles) => {
    const mappedInfoArticles = infoDataArticles.map((infoDataArticle) => {
      const { id } = infoDataArticle.sys;

      const infoImage = infoDataArticle.fields.infoImage.fields.file.url;

      const infoData = {
        id,
        ...infoDataArticle.fields,
        infoImage,
      };
      return infoData;
    });

    setInfoArticles([...mappedInfoArticles]);
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodInfo,
      })

      .then((response) => {
        getInfoData(response.items);
      });
  }, []);

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodArticles,
        limit: 2,
      })

      .then((response) => {
        getArticlesData(response.items, articlesTypes.home);
      });
  }, []);

  const getArticlesData = (dataArticles, articlesType) => {
    const articlesData = dataArticles.map((dataArticle) => {
      const { id } = dataArticle.sys;

      const articleImage = dataArticle.fields.articleImage.fields.file.url;
      const article = {
        id,
        ...dataArticle.fields,
        articleImage,
      };
      return article;
    });

    if (articlesType === articlesTypes.home) {
      setHomeArticles([...articlesData]);
    } else {
      setArticles([...articlesData]);
    }
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: contentfulContentTypes.rodArticles,
        limit: articleLimit,
      })

      .then((response) => {
        getArticlesData(response.items, articlesTypes.all);
        setArticlesTotal(response.total);
      });
  }, [articleLimit]);

  const getMoreArticles = () => {
    setArticleLimit(articleLimit + 2);
  };

  const hideMoreArticles = () => {
    setArticleLimit(2);
  };

  return (
    <>
      <CommunityGardenContext.Provider
        value={{
          homeArticles,
          articles,
          articlesTotal,
          infoArticles,
          pdfData,
          statuteData,
          picturesFlowers,
          picturesHarvest,
          loading,
          showArrowTop,
          isHamburgerMenuOpen,
          getMoreArticles,
          hideMoreArticles,
          toggleHamburgerMenu,
          closeHamburgerMenu,
        }}
      >
        <Router />
      </CommunityGardenContext.Provider>
    </>
  );
};

export default Root;
