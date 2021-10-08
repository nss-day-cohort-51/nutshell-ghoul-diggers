//Author: Gerson Diketama
//Purpose: GET ALL MESSAGES FROM PUBLIC MESSAGE MANAGER

import React, {useEffect } from "react";
import { deleteMessages } from "./publicMessageManager";
import MessageList from "./MessageList";



export const PublicMessages = ({messages, getPublicMessages}) => {

// THIS USE EFFECT WATCHES FOR ANY CHANGES MADE ON APPLICATION VIEWS AND RE-RENDER

  useEffect(() => {
    getPublicMessages();
  }, []);

  const handleDelete = (messageId) =>
  {
    deleteMessages(messageId)
    .then(() => getPublicMessages())

  }
  return (
    <>
      {messages.map((allMessages) => (
        <MessageList key={allMessages.id} data={allMessages} handledelete={handleDelete}/>
      ))}
      
    </>
  );
};
