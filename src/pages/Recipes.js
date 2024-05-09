import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RecipeList } from "../components/RecipeList";

export const Recipes = () => {
  return (
    <div>
      <Navbar />
      <RecipeList />
      <Footer />
    </div>
  );
};
