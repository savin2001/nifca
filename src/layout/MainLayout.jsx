// src/components/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingSocialButton from "../components/SocialMedia";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full mb-28">{children}</main>
      <FloatingSocialButton/>
      <Footer />
    </div>
  );
};

export default MainLayout;
