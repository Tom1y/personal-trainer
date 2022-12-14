import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AllPrograms from "./components/AllPrograms";
import AboutMe from "./components/AboutMe";
import AboutMassage from "./components/AboutMassage";
// import AllArticles from "./components/AllArticles";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jaz" element={<AboutMe />} />
        <Route path="/programi" element={<AllPrograms />} />
        <Route path="/masaze" element={<AboutMassage />} />
        {/* <Route path="/clanki" element={<AllArticles />} /> */}
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
