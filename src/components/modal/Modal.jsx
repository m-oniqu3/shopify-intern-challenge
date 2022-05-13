import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { SearchContext } from "../../contexts/SearchContext";
import styled from "./Modal.module.css";
import { engines } from "../../utility/Engines";

const Modal = (props) => {
  const { setEngine } = useContext(SearchContext);

  const handleEngine = (engine) => {
    setEngine(engine.name);
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
            <p key={engine.name} onClick={() => handleEngine(engine)}>
              {engine.name}
            </p>
          ))}
        </article>
      </section>
    </section>,
    document.getElementById("modal")
  );
};

export default Modal;
