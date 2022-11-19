import React from "react";
import Article from "./Article";
import Footer from "./Footer";
import Header from "./header";
import Massage from "./Massage";
import Program from "./Program";

export default function Main() {
  return (
    <>
      <Header />
      <Program />
      <Massage />
      <Article />
      <Footer />
    </>
  );
}
