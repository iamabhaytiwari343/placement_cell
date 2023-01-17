import React from "react";
import bitd from "../assets/images/BIT_image.jpg";

import Ex from "./ex";
const Home = props => (
  <div>
    <div className="homepic">
      <img src={bitd} alt="" className="logo-img" />
    </div>
    <h1 className="elegantshadow">Message BY the Training and Placement office</h1>
    <Ex />
  </div>
);

export default Home;
