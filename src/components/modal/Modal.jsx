import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { SearchContext } from "../../contexts/SearchContext";
import styled from "./Modal.module.css";

const Modal = (props) => {
  const { setEngine } = useContext(SearchContext);
  const engines = [
    "text-davinci-002",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001",
  ];

  const handleEngine = (engine) => {
    setEngine(engine);
    props.setOpenModal(false);
  };
  // portal that selects the modal div in the dom
  return ReactDOM.createPortal(
    // set the modal state to false and close the modal
    <section
      onClick={() => props.setOpenModal(false)}
      className={styled["modal-background"]}
    >
      {/* prevent the event from bubbling up */}
      <section
        className={styled["modal-container"]}
        onClick={(e) => e.stopPropagation()}
      >
        <article className={styled.engine}>
          <h2>Choose your preferred search engine</h2>
          {engines.map((engine) => (
            <p key={engine} onClick={() => handleEngine(engine)}>
              {engine}
            </p>
          ))}
        </article>
      </section>
    </section>,
    document.getElementById("modal")
  );
};

export default Modal;
