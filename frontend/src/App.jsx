import "./App.css";
import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import HowYouCanHelp from "./components/HowYouCanHelp";
import ScrollToTop from "./components/utils/ScrollToTop";
import Emergencies from "./components/Emergencies";
import AboutUs from "./components/AboutUs";
import PovertyAlleviation from "./components/subpages/PovertyAlleviation";
import Humankind from "./components/subpages/Humankind";
import WomenAndChildrenHealth from "./components/subpages/WomenAndChildrenHealth";
import Womenkind from "./components/subpages/Womenkind";
import WhoWeWorkWith from "./components/subpages/WhoWeWorkWith";
import Volunteer from "./components/subpages/Volunteer";
import Donate from "./components/subpages/Donate";
import EventsAndFundraisers from "./components/subpages/EventsAndFundraisers";
import ContactUs from "./components/subpages/ContactUs";
import Search from "./components/Search";
import { useState } from "react";
import BecomeAPartner from "./components/subpages/BecomeAPartner";
import SyrianCrisis from "./components/subpages/SyrianCrisis";

function App() {
  const [searchResult, setSearchResult] = useState("");
  return (
    <>
      <Header setSearchResult={setSearchResult} />
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
        <Route path="/womenkind" element={<Womenkind />} />

        <Route path="/how-you-can-help" element={<HowYouCanHelp />} />
        <Route path="/donate" element={<Donate />} />
        <Route
          path="/events-and-fundraisers"
          element={<EventsAndFundraisers />}
        />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/become-a-partner" element={<BecomeAPartner />} />

        <Route path="/emergencies" element={<Emergencies />} />
        <Route path="/emergencies/syrian-crisis" element={<SyrianCrisis />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/who-we-work-with" element={<WhoWeWorkWith />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route
          path="/search"
          element={<Search searchResult={searchResult} />}
        />
      </Routes>
    </>
  );
}

export default App;
