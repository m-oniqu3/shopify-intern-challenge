import React, { createContext, useEffect, useState } from "react";
import { engines } from "../utility/Engines";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  //states
  const [engine, setEngine] = useState(engines[1].name);
  const [engineValue, setEngineValue] = useState(engines[1].value);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const selected = engines.find(
      (currentEngine) => currentEngine.name === engine
    );
    setEngineValue(selected.value);
  }, [engine]);

  //object with values to share across all components
  const values = {
    engine,
    setEngine,
    engineValue,
    prompt,
    setPrompt,
  };

  return (
    <SearchContext.Provider value={values}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
