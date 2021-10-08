//Authors: Gerson M. Diketama

//Purpose: This is a public message component, allows users to send messages back and forwards, and I am using React-icons for icons. 

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
    getPublicMessages())
    
    //clear the inputs when user clicks the sent icon
    setSentMessage("")
    }


  return (
    <>
      <input
        type="text"
        placeholder="enter a message"
        value={sentMessage}
        onChange={(evt) => setSentMessage(evt.target.value) }
      />
      <button onClick={(event) => HandleInputAndSent(event)}><AiOutlineSend/></button>
    </>
  );
};

export default SentMessages;
