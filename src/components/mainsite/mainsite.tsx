import React from "react";

import { withRouter } from "react-router-dom";

import Main from "../main";
import BodyText from "../bodytext";
import BodyCart from "../bodycart";
import MainFooter from "../footermain";
import Users from "../users";

const MainSite = () => {
  return (
    <>
      <Main />
      <BodyText />
      <BodyCart />

      <MainFooter />
    </>
  );
};

export default withRouter(MainSite);
