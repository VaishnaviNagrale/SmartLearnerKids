import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout2 = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 items-center justify-center h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout2;
