import Navbar from "./componenti/Navbar";
import React from "react";
import Main from "./componenti/Main";
// index.js o App.js
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Section from "./componenti/Section";
import Footer from "./componenti/Footer";
import Menu from "./componenti/Menu";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cocktails from "./componenti/Cocktails";
import Home from "./componenti/Home";
import Ourlocations from "./componenti/Ourlocations";

const style = {
  fontfamily: "Cormorant Garamond",
};
function App() {
  return (
    // da mettere sempre , perche accetta solo un elemento
    //  racchiuso in queste parentesi
    <>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cocktails" element={<Cocktails />} />
            <Route path="/ourlocations" element={<Ourlocations />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Menu />
      <Section /> */}
      <Footer />
    </>
  );
}
export default App;
