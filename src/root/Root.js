import React, { useState, useEffect } from "react";
import Router from "../routing/Router";
import CommunityGardenContext from "../context/context";

const Root = () => {
  return (
    <>
      <CommunityGardenContext.Provider value={{}}>
        <Router />
      </CommunityGardenContext.Provider>
    </>
  );
};

export default Root;
