import React from "react";
import "../index.css";
import fragole from "../assets/fragole.jpg";
import bistecca from "../assets/bistecca.jpg";
import primi from "../assets/primi.jpg";

function Menu() {
  
  return (
    <div id="ilmiomenu" className="row" >
      <h1>-THE MENU-</h1>
      <h3>at Lorem </h3>

      <h3></h3>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={bistecca}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
        <h2>First courses</h2>
        <p>Lorem ipsum dolor sit amet, lorem ipum dolor sit amet.</p>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={primi}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <h2>Main courses</h2>
        <p>Lorem ipsum dolor</p>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={fragole}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />
        <h2>Desserts</h2>
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  );
}
export default Menu;
