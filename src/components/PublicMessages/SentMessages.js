//Authors: Gerson M. Diketama

//Purpose: This is a public message component, allows users to send messages back and forwards, and I am using React-icons for icons. 

import React, { useState, useEffect } from "react";
import { addPublicMessages } from "./publicMessageManager";
import {AiOutlineSend} from "react-icons/ai"


const SentMessages = ({getPublicMessages}) => {
  const [sentMessage, setSentMessage] = useState("");
  
  const HandleInputAndSent = (event) => {
   

    
    const messages = {
      post: sentMessage,
      userId: parseInt(sessionStorage.getItem("nutshell_user"))
    };
    console.log(messages)
    addPublicMessages(messages).then(() => 
    getPublicMessages())

    event.preventDefault();
    //clear the inputs when user clicks the sent icon
    


    }

    
    useEffect(() => {
 
      const listener = event => {
        if (event.keyCode === 13 || event.code === "NumpadEnter") {
          console.log("Enter key was pressed. Run your function.");
          HandleInputAndSent(event);
          setSentMessage("")
         
        }
      };
      document.addEventListener("keydown", listener);
    }, []);



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
