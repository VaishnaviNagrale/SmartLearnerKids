import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ background: "linear-gradient(to bottom right, #ffffff, #fa9490, #85e7f8)", animation: "gradientAnimation 30s infinite" }}>
      <Header/>
      <div className="content">{children}</div>
      <Footer />
      </div>
    </>
  );
};

export default Layout;