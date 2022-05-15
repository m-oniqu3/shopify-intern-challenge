import "./App.css";

import React from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Result from "./components/results/Result";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Result />
      </main>
      <Search />
    </div>
  );
};

export default App;
