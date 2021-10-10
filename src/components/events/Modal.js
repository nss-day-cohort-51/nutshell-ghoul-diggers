//Modal.js

import React, { useRef } from "react";
import ReactDom from "react-dom";
import { EventWeather } from "../events/EventWeather"

export const Modal = ({ setShowModal, event }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <EventWeather event={event}/>

        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};