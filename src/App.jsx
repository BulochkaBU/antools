import React from "react";

import "./css/style.css";

import Promo from "./components/Promo";
import PopularTools from "./components/PopularTools";
import Brands from "./components/Brands";

import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Promo />
      <PopularTools />
      <Brands />
      <Slider />
    </>
  );
}

export default App;
