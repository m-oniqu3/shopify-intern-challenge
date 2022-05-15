import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import styled from "./Search.module.css";
import { openai } from "../../utility/api";

const Search = () => {
  const {
    engine,
    prompt,
    setPrompt,
    setResults,
    setCopy,

    setLoading,
  } = useContext(SearchContext);

  // async function to fetch data from openai based on the user's prompt
  const fetchData = async () => {
    setLoading(true);
    try {
      const time = new Date().toLocaleTimeString();

      const response = await openai.createCompletion(`${engine}`, {
        prompt: `${prompt}`,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const data = response.data.choices[0].text;
      setResults((previousResults) => [
        ...previousResults,
        { prompt, data, time },
      ]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //alert the user if the prompt submitted was empty
    prompt === "" && alert("Input cannot be empty");
    setCopy((prev) => [prompt, ...prev]);
    fetchData();
    // setPrompt("");
  };

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
