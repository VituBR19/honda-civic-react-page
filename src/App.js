import React from "react";
import "./App.css";
import Header from "./Sections/Header";
import Banner from "./Sections/Banner";
import Models from "./Sections/Models";
import Presentation from "./Sections/Presentation";
import TestDrive from "./Sections/TestDrive";
import Design from "./Sections/Design";
import Performance from "./Sections/Performance";
import Quality from "./Sections/Quality";
import Gallery from "./Sections/Gallery";
import Catalog from "./Sections/Catalog";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Models />
      <Presentation />
      <TestDrive />
      <Design />
      <Performance />
      <Quality />
      <Gallery />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
