import React, { useState, useEffect } from "react";
import { getPublicMessages, deleteMessages } from "./publicMessageManager";
import MessageList from "./MessageList";
import SentMessages from "./SentMessages";
import { addFriends } from "../friends/FriendManager";
import { getUserById } from "../users/UserManager";


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

    getUserById(parseInt(sessionStorage.getItem("nutshell_user"))).then(res => {
      console.log(res);

      const friendObj = {
        userId: input,
        currentUserId: res.id,
        currentUserName: res.name
      }
      addFriends(friendObj);
    })
  }
  return (
    <>
      {messages.map((allMessages) => (
        <MessageList key={allMessages.id} data={allMessages} handledelete={handleDelete} handleAddFriend={handleAddFriend}/>
      ))}
      
    </>
  );
};
