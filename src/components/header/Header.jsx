import React, { useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import Modal from "../modal/Modal";
import styled from "./Header.module.css";

const Header = () => {
  const { engine } = useContext(SearchContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className={styled.header}>
        <h1>Fun with AI</h1>
        <button onClick={() => setOpenModal((prevState) => !prevState)}>
          {engine}
        </button>
      </header>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default Header;
// {/* <select>
//         <optgroup>
//           <option value="text-davinci-002"> Davinci</option>
//           <option value="text-curie-001">Curie</option>
//           <option value="text-babbage-001">Babbage</option>
//           <option value="text-ada-001">Ada</option>
//         </optgroup>
//       </select> */}
