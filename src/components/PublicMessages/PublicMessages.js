import React, { useState, useEffect } from "react";
import { getPublicMessages, deleteMessages } from "./publicMessageManager";
import MessageList from "./MessageList";
import SentMessages from "./SentMessages";


export const PublicMessages = ({messages, getPublicMessages}) => {

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
