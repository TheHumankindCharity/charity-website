import "./App.css";
import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>
    </>
  );
}

export default App;
