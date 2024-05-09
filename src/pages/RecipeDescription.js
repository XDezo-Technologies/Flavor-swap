import React from "react";
import { Navbar } from "../components/Navbar";
import { Recipe } from "../components/Recipe";
import { Footer } from "../components/Footer";

export const RecipeDescription = () => {
  return (
    <div>
      <Navbar />
      <Recipe />
      <Footer />
    </div>
  );
};
