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
import WhoWeWorkWith from "./components/subpages/WhoWeWorkWith";
import Volunteer from "./components/subpages/Volunteer";
import Donate from "./components/subpages/Donate";
import WhoWeAre from "./components/subpages/WhoWeAre";
import EventsAndFundraisers from "./components/subpages/EventsAndFundraisers";
import ContactUs from "./components/subpages/ContactUs";

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
        <Route path="/donate" element={<Donate />} />
        <Route
          path="/events-and-fundraisers"
          element={<EventsAndFundraisers />}
        />
        <Route path="/volunteer" element={<Volunteer />} />

        <Route path="/emergencies" element={<Emergencies />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
        <Route path="/about-us/who-we-work-with" element={<WhoWeWorkWith />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
