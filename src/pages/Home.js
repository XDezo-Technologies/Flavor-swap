import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <Slider />

      <Footer />
    </div>
  );
};
