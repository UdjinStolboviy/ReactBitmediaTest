import React from "react";
import "./footermain.scss";

import backgroundfooter from "./img/Rectangle54.png";

const MainFooter = () => {
  return (
    <div className="content">
      <footer
        style={{
          backgroundImage: `url(${backgroundfooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <section className="mainfooter">
          <div className="container">
            <div className="mainfooter__block block">
              <div className="serchsite">
                <input
                  type="text"
                  name=""
                  id="footerserch"
                  placeholder="Enter your email"
                />
                <button className="btn-serch btn">Subscribe</button>
              </div>
              <div className="block__info-footer">
                <div className="text-footer">
                  <div className="logo logo-mod">AppCo</div>

                  <p>All rights reserved by ThemeTags</p>
                  <p className="copyrights">Copyrights © 2019.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default MainFooter;
