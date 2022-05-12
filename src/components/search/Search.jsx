import React from "react";
import styled from "./Search.module.css";

const Search = () => {
  return (
    <form className={styled.form}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
