import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const Result = () => {
  const { results, prompt, loading } = useContext(SearchContext);

  const responses = results.map((result) => {
    return (
      <article key={result.time}>
        <p>{result.prompt}</p>

        {result.data ? <p>{result.data}</p> : "loading"}
      </article>
    );
  });
  return (
    <section>
      <article>{responses}</article>
      {/* if loading show the prompt */}
      {loading && <p>{prompt}</p>}
    </section>
  );
};

export default Result;
