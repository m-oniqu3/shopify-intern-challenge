import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import styled from "./Header.module.css";

const Header = () => {
  const { engine } = useContext(SearchContext);
  return (
    <header className={styled.header}>
      <h1>Fun with AI</h1>
      {/* <select>
        <optgroup>
          <option value="text-davinci-002"> Davinci</option>
          <option value="text-curie-001">Curie</option>
          <option value="text-babbage-001">Babbage</option>
          <option value="text-ada-001">Ada</option>
        </optgroup>
      </select> */}

      <button>{engine}</button>
    </header>
  );
};

export default Header;
