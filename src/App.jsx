import React from "react";

import "./css/style.css";

import Promo from "./components/Promo";
import PopularTools from "./components/PopularTools";
import Brands from "./components/Brands";
import Newcomer from "./components/Newcomer";
import Slider from "./components/Slider";
import Contributor from "./components/Contributor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Promo />
      <PopularTools />
      <Brands />
      <Newcomer />
      <Slider />
      <Contributor />
      <Footer />
    </>
  );
}

export default App;
