import React from "react";
import logo from "../public/images/logo.png";
const profile = () => {
  return (
    <div className="select-none flex flex-col">
      <img src={logo.src} alt="Logo" className="lg:h-24 h-12" />
    </div>
  );
};

export default profile;
