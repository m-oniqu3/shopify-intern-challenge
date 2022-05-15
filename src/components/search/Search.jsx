import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import styled from "./Search.module.css";
import { openai } from "../../utility/api";

const Search = () => {
  const { prompt, setPrompt, results, setResults } = useContext(SearchContext);

  // async function to fetch data from openai based on the user's prompt
  const fetchData = async () => {
    const response = await openai.createCompletion("text-curie-001", {
      prompt: `${prompt}`,
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const data = response.data.choices[0].text;
    setResults((previousResults) => [...previousResults, { prompt, data }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //alert the user if the prompt submitted was empty
    prompt === "" && alert("Input cannot be empty");

    fetchData();
    setPrompt("");
  };

  useEffect(() => {
    results !== [] && console.log(results);
  }, [results]);

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter prompt"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
