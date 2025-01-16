// src/components/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full mb-28">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
