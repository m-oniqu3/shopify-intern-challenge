import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import styled from "./Search.module.css";

const Search = () => {
  const { prompt, setPrompt } = useContext(SearchContext);

  const handleSubmit = () => {
    prompt === "" && alert("Input cannot be empty");
  };
  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter prompt"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
