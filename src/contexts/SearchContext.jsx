import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  //states
  const [engine, setEngine] = useState("text-curie-001");

  //object with values to share across all components
  const values = {
    engine,
    setEngine,
  };

  return (
    <SearchContext.Provider value={values}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
