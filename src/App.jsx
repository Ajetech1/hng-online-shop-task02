import React from "react";
import MyNavbar from "./Component/MyNavbar";
import HeroSection from "./Component/HeroSection";
import MakerType from "./Component/MakerType";
import NewArrivals from "./Component/NewArrivals";
import DressStyleGrid from "./Component/DressStyleGrid";
import TopSellingCard from "./Component/TopSelling";
import Testimonials from "./Component/Testimonials";
import NewsletterSubscription from "./Component/NewsletterSubscription";
import Footer from "./Component/Footer";
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
        <NewArrivals />
        <DressStyleGrid />
        <TopSellingCard />
        <Testimonials />
        <NewsletterSubscription />
        <Footer />
      </div>
    </>
  );
}

export default App;
