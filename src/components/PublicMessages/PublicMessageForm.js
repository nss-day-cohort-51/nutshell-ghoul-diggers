//Authors: Gerson M. Diketama

//Purpose: This is a public message component, allows users to send messages back and forth to each other, and I am using React-icons for icons 

import React, { useState } from "react";
import { addPublicMessages } from "./PublicMessageManager";
import {RiSendPlane2Fill} from "react-icons/ri"
import { getUserById } from "../users/UserManager";


export const PublicMessageForm = ({getPublicMessages}) => {
  const [sentMessage, setSentMessage] = useState();
  
  const HandleInput = (event) => {
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

        //clear the inputs when user clicks the sent icon
        setSentMessage("");
      })
  };


  return (
    <>
    <div className="message__flex">

      <div className="message__input--headline">Messages</div>

      <div className="message__input">

        <div className="message__input--textarea">
          <input
            type="text"
            className="form__group--message"
            placeholder=" Enter your message"
            value={sentMessage}
            onChange={(evt) => setSentMessage(evt.target.value) }
          />
        </div>

        <div className="message__input--button">
            <button
              type="button"
              className="form__btn--message" 
              onClick={(event) => HandleInput(event)}>
                <RiSendPlane2Fill />
            </button>
        </div>

      </div>

    </div>
    </>
  );
};
