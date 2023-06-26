import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Home from '../pages/Home/Home';
import Articles from '../pages/Articles/Articles';
import FullArticle from '../pages/FullArticle/FullArticle';
import GalleryManager from '../pages/Gallery/GalleryManager';
import GalleryFlower from '../pages/Gallery/GalleryFlower';
import GalleryHarvest from '../pages/Gallery/GalleryHarvest';
import InformationManager from '../pages/InformationPages/InformationManager/InformationManager';
import Statute from '../pages/InformationPages/StatutePages/Statute';
import OrganizationManager from '../pages/InformationPages/OrganizationPages/OrganizationManager';
import OrganizationElement from '../pages/InformationPages/OrganizationPages/OrganizationElement';
import DocumentManager from '../pages/DocumentManager/DocumentManager';
import Contact from '../pages/Contact/Contact';
import { routes } from '../routes';
import ScrollToTop from './ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <ScrollToTop />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.articles} component={Articles} />
          <Route path={routes.fullArticle} component={FullArticle} />
          <Route path={routes.gallery} component={GalleryManager} />
          <Route path={routes.galleryFlower} component={GalleryFlower} />
          <Route path={routes.galleryHarvest} component={GalleryHarvest} />
          <Route
            path={routes.informationManager}
            component={InformationManager}
          />
          <Route path={routes.statute} component={Statute} />
          <Route
            path={routes.organizationManager}
            component={OrganizationManager}
          />
          <Route
            path={routes.organizationElement}
            component={OrganizationElement}
          />
          <Route path={routes.documentManager} component={DocumentManager} />
          <Route path={routes.contact} component={Contact} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
