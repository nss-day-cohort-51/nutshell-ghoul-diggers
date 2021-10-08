import React, {useState} from "react";
import { Route } from "react-router-dom";
import { PublicMessages } from "./PublicMessages/PublicMessages";
import SentMessages from "./PublicMessages/SentMessages";
import { getPublicMessages } from "./PublicMessages/publicMessageManager";
import { AddArticle } from "./articles/AddArticle"
import { Articles } from "./articles/Articles"
import { EditForm } from "./articles/EditArticle"
import { AddFriend } from "./friends/AddFriend"
import { Friends } from "./friends/Friends"
import MessageList from "./PublicMessages/MessageList";
import { MessageEdit } from "./PublicMessages/PublicForm";

export const ApplicationViews = () => {
  const[messages, setPublicMessages]= useState([])
  const getMeMesssage = () => {
    getPublicMessages().then((message) => setPublicMessages(message));
  };
  
  return (
    <>
      <Route exact path="/">
        {/* Render the component for news articles */}
        <Articles />
      </Route>
      <Route path="/add">
        {/* Render the component for adding articles*/}
        <AddArticle /> 
      </Route>
      <Route path="/:articleId/edit">
        <EditForm />
      </Route>

{/* author: Gerson
Purpose: If the routh match the message edit path then will take the user to this page. */}
      <Route  path="/messages/:messageId(\d+)/edit">
        <MessageEdit />
      </Route>

      <Route exact path="/friends">
        {/* Render the component for list of friends */}
        <Friends />
      </Route>
      <Route path="/friends/add">
        {/* Render the component for adding friends */}
        <AddFriend /> 
      </Route>
    
      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <PublicMessages messages={messages} getPublicMessages={getMeMesssage}/>
        <SentMessages getPublicMessages={getMeMesssage} />
      </Route>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  );
};
