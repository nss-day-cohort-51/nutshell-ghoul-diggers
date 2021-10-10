//WeatherApp.js

import React, { useState } from "react";
import "../events/Modal.css";
import { Modal } from "./Modal";

export const WeatherApp = ( { event } ) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(true);
    };
    return (
      <div className="WeatherApp">
        <button onClick={openModal}>Weather</button>
        {showModal ? <Modal setShowModal={setShowModal} event={event} /> : null}
      </div>
    );
}