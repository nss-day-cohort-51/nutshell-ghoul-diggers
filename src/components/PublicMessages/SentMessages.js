import React, { useState, useEffect } from "react";
import { addPublicMessages } from "./publicMessageManager";
import {AiOutlineSend} from "react-icons/ai"


const SentMessages = ({getPublicMessages}) => {
  const [sentMessage, setSentMessage] = useState("");

  const HandleInputAndSent = (event) => {
    event.preventDefault();
    const messages = {
      post: sentMessage,
      userId: parseInt(sessionStorage.getItem("nutshell_user"))
    };

    addPublicMessages(messages).then(() => 
    getPublicMessages()
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder=""
        onChange={(evt) => setSentMessage(evt.target.value)}
      />
      <button onClick={(event) => HandleInputAndSent(event)}><AiOutlineSend/></button>
    </>
  );
};

export default SentMessages;