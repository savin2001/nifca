// src/components/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
