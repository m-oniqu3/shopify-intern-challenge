import React, { createContext, useState } from "react";
import { engines } from "../utility/Engines";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  //states
  const [engine, setEngine] = useState(engines[1]);
  const [prompt, setPrompt] = useState("");
  const [copy, setCopy] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  //object with values to share across all components
  const values = {
    engine,
    setEngine,
    prompt,
    setPrompt,
    results,
    setResults,
    copy,
    setCopy,
    loading,
    setLoading,
  };

  return (
    <SearchContext.Provider value={values}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
