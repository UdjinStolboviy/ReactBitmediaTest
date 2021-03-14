import React from "react";
import "./main.scss";
import mob from "./img/mobile.png";
import backgroundhader from "./img/Rectangle.png";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="content">
      <header
        style={{
          backgroundImage: `url(${backgroundhader})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <section className="main">
          <div className="container">
            <div className="main__block block">
              <div className="logo">AppCo</div>
              <div className="block__info-hader">
                <div className="text-heder">
                  <h1>
                    <span>Brainstorming </span>
                    for <br></br>desired perfect Usability
                  </h1>
                  <p>
                    Our design projects are fresh and simple and will benefit{" "}
                    <br></br>
                    your business greatly. Learn more about our work!
                  </p>
                  <button className="status">
                    <Link to="/statistics">Views Stats</Link>
                  </button>
                </div>
                <div className="block__mob-hader">
                  <img src={mob} alt="mob" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Main;
