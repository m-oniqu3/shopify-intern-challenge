import React, { useContext, useEffect, useRef } from "react";
import styled from "./Result.module.css";
import { SearchContext } from "../../contexts/SearchContext";

const Result = () => {
  //context and refs
  const { results, copy, loading } = useContext(SearchContext);
  const responseRef = useRef();
  const promptRef = useRef();

  //scroll to the response when the api responds and scroll to the prompt when the user sumbits
  useEffect(() => {
    if (results !== []) {
      responseRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (loading) {
      promptRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [results, loading]);

  // map over the results and return an article with the propmpt and the response
  const responses = results.map((result) => {
    return (
      <article key={result.time} className={styled.response}>
        <p className={styled.prompt}>
          <span>Prompt</span>
          {result.prompt}
        </p>
        <p className={styled.result} ref={responseRef}>
          <span>Response</span>
          {result.data}
        </p>
      </article>
    );
  });

  return (
    <section>
      <>{responses}</>

      {/* if loading show a copy of the last prompt */}
      {loading && (
        <p className={styled.prompt} ref={promptRef}>
          <span>Prompt</span>
          {copy[0]}
        </p>
      )}
    </section>
  );
};

export default Result;
