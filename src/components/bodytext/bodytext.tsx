import React from "react";
import "./bodytext.scss";

const BodyText = () => {
  return (
    <section className="body-text">
      <div className="container">
        <div className="body-text__block block">
          <h2 className="block__haedertext">
            Why{" "}
            <span className="block__haederspan">
              small business owners <br />
              love{" "}
            </span>
            AppCo?
          </h2>
          <p className="color-p-body">
            Our design projects are fresh and simple and will benefit your
            business <br /> greatly. Learn more about our work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BodyText;
