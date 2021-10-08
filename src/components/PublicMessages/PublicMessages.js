import React, { useState, useEffect } from "react";
import { getPublicMessages, deleteMessages } from "./publicMessageManager";
import MessageList from "./MessageList";
import SentMessages from "./SentMessages";
import { addFriends } from "../friends/FriendManager";


export const PublicMessages = ({messages, getPublicMessages}) => {

  useEffect(() => {
    getPublicMessages();
  }, []);

  const handleDelete = (messageId) =>
  {
    deleteMessages(messageId)
    .then(() => getPublicMessages())

  }

  const handleAddFriend = (input) => {

    const friendObj = {
      userId: input,
      currentUserId: parseInt(sessionStorage.getItem("nutshell_user"))
    }
    addFriends(friendObj);
  }
  return (
    <>
      {messages.map((allMessages) => (
        <MessageList key={allMessages.id} data={allMessages} handledelete={handleDelete} handleAddFriend={handleAddFriend}/>
      ))}
      
    </>
  );
};
