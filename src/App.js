import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import VsiProgrami from "./components/VsiProgrami";
import Omeni from "./components/Omeni";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jaz" element={<Omeni />} />
        <Route path="/programi" element={<VsiProgrami />} />
      </Routes>
    </>
  );
}

export default App;
