//Authors: Gerson M. Diketama

//Purpose: This is a public message component, allows users to send messages back and forth to each other, and I am using React-icons for icons 

import React, { useState } from "react";
import { addPublicMessages } from "./PublicMessageManager";
import {AiOutlineSend} from "react-icons/ai"


const PublicMessageForm = ({getPublicMessages}) => {
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
    <div className="message__input">
      <input
        type="text"
        className="form__group--edit"
        placeholder="enter a message"
        value={sentMessage}
        onChange={(evt) => setSentMessage(evt.target.value) }
      />
      <button
        type="button"
        className="form__btn" 
        onClick={(event) => HandleInputAndSent(event)}>
          <AiOutlineSend />
      </button>
    </div>
    </>
  );
};

export default PublicMessageForm;
