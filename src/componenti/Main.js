import React from "react";
import videodicopertina from "../assets/videodicopertina.mp4";
import './Main.css';


const Main = () => {
  return (
    <>

    <div className="main">
        <div className="overlay"></div>
      <video src={videodicopertina} autoPlay loop muted />
    
    <div className="content">
        <h1>THE ART OF FOOD</h1>
        <hr/>
        <h2>Lorem ipsum</h2>
    </div>
    </div>
    </>
  );
};

export default Main;
