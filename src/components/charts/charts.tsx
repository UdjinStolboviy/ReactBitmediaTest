import React, { useEffect, useState } from "react";
import "./charts.scss";
import HaederLittle from "../footerheder/haederlittle";
import FooterLittle from "../footerheder/footerlittle";
import Example from "./chartsClicks";

import { withRouter, Link } from "react-router-dom";

const Charts = () => {
  return (
    <>
      <HaederLittle />
      <section className="user chatr-mod">
        <div className="container">
          <Link className="link" to="/">
            Main page {">"}
          </Link>
          <Link className="link " to="/statistics">
            User satistics {">"}
          </Link>
          <Link className="link active" to="/chars">
            Samuel
          </Link>
          <div className="user-text">Samuel Frost</div>

          <Example />
        </div>
      </section>
      <FooterLittle />
    </>
  );
};

export default withRouter(Charts);
