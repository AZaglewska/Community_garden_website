import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import { routes } from "../routes";
import Home from "../pages/Home/Home";
import Articles from "../pages/Articles/Articles";
import FullArticle from "../pages/FullArticle/FullArticle";
import GalleryManager from "../pages/Gallery/GalleryManager";
import GalleryOne from "../pages/Gallery/GalleryOne";
import GallerySecond from "../pages/Gallery/GallerySecond";
import Regulations from "../pages/Regulations/Regulations";
import InformationManager from "../pages/Information/InformationManager";
import Contact from "../pages/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.articles} component={Articles} />
          <Route path={routes.fullArticle} component={FullArticle} />
          <Route path={routes.gallery} component={GalleryManager} />
          <Route path={routes.gallery1} component={GalleryOne} />
          <Route path={routes.gallery2} component={GallerySecond} />
          <Route path={routes.regulations} component={Regulations} />
          <Route path={routes.information} component={InformationManager} />
          <Route path={routes.contact} component={Contact} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
