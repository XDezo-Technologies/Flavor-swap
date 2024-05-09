import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};
