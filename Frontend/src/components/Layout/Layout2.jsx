import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout2 = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "linear-gradient(to bottom right, #ffffff, #fa9490, #85e7f8)", animation: "gradientAnimation 30s infinite" }}>
      <Navbar />
      <div className="flex flex-1 items-center justify-center h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout2;
