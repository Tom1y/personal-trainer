import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AllPrograms from "./components/AllPrograms";
import AboutMe from "./components/AboutMe";
import AboutMassage from "./components/AboutMassage";
import AllArticles from "./components/AllArticles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jaz" element={<AboutMe />} />
        <Route path="/programi" element={<AllPrograms />} />
        <Route path="/masaze" element={<AboutMassage />} />
        <Route path="/clanki" element={<AllArticles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
