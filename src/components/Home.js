import React from "react";
import Iphone from "../images/iphone.png";
import Icon from "../images/add-to-cart.png";
const Home = () => {
  return (
    <div>
        <div className="cart-icon">
            <img src={Icon} alt="add-to-cart-icon" />
        </div>
      <div className="cart">
        <div className="cart-image">
          <img src={Iphone} alt="iphone" />
        </div>
        <div className="cart-price">
          <span>I-phone</span>
          <br />
          <span>price: $1000</span>
        </div>
        <div className="add-to-cart">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
