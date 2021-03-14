import React from "react";
import "./footerlittle.scss";

const FooterLittle = () => {
  return (
    <section className="footerlittle">
      <div className="container">
        <div className="footerlittle__block text-footer ">
          <div className=" logo-little-footer">AppCo</div>
          <p>All rights reserved by ThemeTags</p>
          <p className="copyrights">Copyrights © 2019.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterLittle;
