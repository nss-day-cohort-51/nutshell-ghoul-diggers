//Author: Gerson Diketama
//Purpose: GET ALL MESSAGES FROM PUBLIC MESSAGE MANAGER

import React, {useEffect } from "react";
import { deleteMessages } from "./PublicMessageManager";
import MessageList from "./MessageList";
import { addFriends, getFriendsById } from "../friends/FriendManager";
import { getUserById } from "../users/UserManager";
import "./Message.css"


export const PublicMessages = ({messages, getPublicMessages, friends, getFriendsList}) => {

// THIS USE EFFECT WATCHES FOR ANY CHANGES MADE ON APPLICATION VIEWS AND RE-RENDER
  useEffect(() => {
    getPublicMessages();
    getFriendsList();
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
      addFriends(friendObj).then(() => getFriendsList());
    })
  }
  return (
    <>
      <section className="section__message">
      {messages.map((allMessages) => (
        <MessageList key={allMessages.id} data={allMessages} handledelete={handleDelete} handleAddFriend={handleAddFriend} friends={friends} getFriendsList={getFriendsList}/>
      ))}
      </section>
    </>
  );
};
