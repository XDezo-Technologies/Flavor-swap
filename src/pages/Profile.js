import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { UserProfile } from "../components/UserProfile";
import { RecipeSubmissionForm } from "../components/RecipeSubmissionForm";

export const Profile = () => {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <RecipeSubmissionForm />
      <Footer />
    </div>
  );
};
