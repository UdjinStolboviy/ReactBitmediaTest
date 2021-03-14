import React from "react";
import "./bodycarts.scss";
import CartProd from "./cartprod";
import img1 from "./img/group1.png";
import img2 from "./img/Group2.png";
import img3 from "./img/Group3.png";

const BodyCart = () => {
  const texth1: string = "Clean Design",
    texth2: string = "Secure Data",
    texth3: string = "Retina Ready",
    textp1: string = "Increase sales by showing true dynamics of your website.",
    textp2: string =
      "Build your online store’s trust using Social Proof & Urgency.",
    textp3: string =
      "Realize importance of social proof in customer’s purchase decision.";

  return (
    <section className="body-cart">
      <div className="container">
        <div className="body-cart__block block">
          <CartProd imgUrl={img1} textCartHaed={texth1} textCartPar={textp1} />
          <CartProd imgUrl={img2} textCartHaed={texth2} textCartPar={textp2} />
          <CartProd imgUrl={img3} textCartHaed={texth3} textCartPar={textp3} />
        </div>
      </div>
    </section>
  );
};

export default BodyCart;
