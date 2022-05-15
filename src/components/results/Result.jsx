import React, { useContext, useEffect, useRef } from "react";
import styled from "./Result.module.css";
import { SearchContext } from "../../contexts/SearchContext";

const Result = () => {
  const { results, copy, loading } = useContext(SearchContext);
  const responseRef = useRef();

  useEffect(() => {
    if (results !== []) {
      responseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [results]);

  const responses = results.map((result) => {
    return (
      <article key={result.time} className={styled.response}>
        <p className={styled.prompt}>{result.prompt}</p>

        {result.data ? (
          <p className={styled.result} ref={responseRef}>
            {result.data}
          </p>
        ) : (
          "loading"
        )}
      </article>
    );
  });
  return (
    <section>
      {responses}
      {/* if loading show the prompt */}
      {loading && <p>{copy[0]}</p>}
    </section>
  );
};

export default Result;
