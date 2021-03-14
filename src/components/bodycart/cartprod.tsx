import React from "react";
import "./cartprod.scss";

const CartProd = ({
  imgUrl,
  textCartHaed,
  textCartPar,
}: {
  imgUrl?: any;
  textCartHaed?: string;
  textCartPar?: string;
}) => {
  return (
    <div className="cart-bloc">
      <img className="imgcart" src={imgUrl} alt="First slide" />
      <div className="service-bloc-text">
        <h3>{textCartHaed}</h3>
        <p className="color-p-cart">{textCartPar}</p>
      </div>
    </div>
  );
};
export default CartProd;
