import "./App.css";
import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import HowYouCanHelp from "./components/HowYouCanHelp";
import Footer from "./components/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Emergencies from "./components/Emergencies";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/how-you-can-help" element={<HowYouCanHelp />} />
        <Route path="/emergencies" element={<Emergencies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
