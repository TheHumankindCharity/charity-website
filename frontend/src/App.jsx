import "./App.css";
import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import HowYouCanHelp from "./components/HowYouCanHelp";
import Footer from "./components/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Emergencies from "./components/Emergencies";
import AboutUs from "./components/AboutUs";
import PovertyAlleviation from "./components/subpages/PovertyAlleviation";
import Humankind from "./components/subpages/Humankind";
import WomenAndChildrenHealth from "./components/subpages/WomenAndChildrenHealth";
import Womankind from "./components/subpages/Womankind";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route
          path="/what-we-do/poverty-alleviation"
          element={<PovertyAlleviation />}
        />
        <Route path="/humankind" element={<Humankind />} />
        <Route
          path="/what-we-do/women-and-children"
          element={<WomenAndChildrenHealth />}
        />
        <Route path="/womankind" element={<Womankind />} />
        <Route path="/how-you-can-help" element={<HowYouCanHelp />} />
        <Route path="/emergencies" element={<Emergencies />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
