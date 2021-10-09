//App.js

import React, { useState } from "react";
import "../events/Modal.css";
import { Modal } from "../events/Modal";

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
    };
    return (
      <div className="App">
        <button onClick={openModal}>Weather</button>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>
    );
}