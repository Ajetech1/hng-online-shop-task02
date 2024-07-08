import React from "react";
import MyNavbar from "./Component/MyNavbar";
import HeroSection from "./Component/HeroSection";
import MakerType from "./Component/MakerType";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <MyNavbar />
      </div>
      <div className="content">
        <HeroSection />
        <MakerType />
      </div>
    </>
  );
}

export default App;
