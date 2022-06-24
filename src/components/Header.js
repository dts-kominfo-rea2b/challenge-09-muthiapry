// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>
        <strong>Call a Friend</strong>
      </h1>
      <p>your friendly contact app</p>
      <hr className="border" />
    </div>
  );
};

export default Header;
