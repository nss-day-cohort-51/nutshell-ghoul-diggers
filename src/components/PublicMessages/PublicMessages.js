//Author: Gerson Diketama
//Purpose: GET ALL MESSAGES FROM PUBLIC MESSAGE MANAGER

import React, {useEffect } from "react";
import { deleteMessages } from "./PublicMessageManager";
import MessageCard from "./MessageCard";
import { addFriends } from "../friends/FriendManager";
import { getUserById } from "../users/UserManager";


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

      {publicMessages.map((allMessages) => (
        <MessageCard key={allMessages.id} data={allMessages} handledelete={handleDelete} handleAddFriend={handleAddFriend} />
      ))}
    </>
  );
};
