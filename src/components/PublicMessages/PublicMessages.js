//Author: Gerson Diketama
//Purpose: GET ALL MESSAGES FROM PUBLIC MESSAGE MANAGER

import React, {useEffect } from "react";
import { deleteMessages } from "./PublicMessageManager";
import MessageCard from "./MessageCard";



export const PublicMessages = ({ publicMessages, getPublicMessages}) => {

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
      {publicMessages.map((allMessages) => (
        <MessageCard key={allMessages.id} data={allMessages} handledelete={handleDelete}/>
      ))}
      
    </>
  );
};
