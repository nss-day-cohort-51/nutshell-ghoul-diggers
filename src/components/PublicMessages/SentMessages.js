//Author: Gerson M. Diketama
//Purpose: This is a public message component that allows users to send messages to a message board

import React, { useState} from "react";
import { addPublicMessages } from "./PublicMessageManager";
import {AiOutlineSend} from "react-icons/ai"
import { getUserById } from "../users/UserManager";


export const SentMessages = ({getPublicMessages}) => {
  const [sentMessage, setSentMessage] = useState("");
  
  const HandleInputAndSent = (event) => {
   

    event.preventDefault();
    
    getUserById(parseInt(sessionStorage.getItem("nutshell_user")))
      .then(res => {

        const messages = {
          post: sentMessage,
          userId: parseInt(sessionStorage.getItem("nutshell_user")),
          userName: res.name,
          timestamp: Date.now()
        };
    
        addPublicMessages(messages).then(() => 
        getPublicMessages()
        );
      })
  };

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
