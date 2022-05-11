import React from "react";
import styled from "./Header.module.css";
const Header = () => {
  return (
    <header className={styled.header}>
      <h1>Fun with AI</h1>
      <button>Currie</button>
    </header>
  );
};

export default Header;
