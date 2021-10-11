import { Route } from "react-router-dom"
import { TaskEditForm } from "./tasks/TaskEditForm"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"
import React, { useState } from "react";
import { PublicMessages } from "./PublicMessages/PublicMessages";
import SentMessages from "./PublicMessages/SentMessages";
import { getPublicMessages } from "./PublicMessages/PublicMessageManager";
import { AddArticle } from "./articles/AddArticle"
import { Articles } from "./articles/Articles"
import { ArticleEditForm } from "./articles/ArticleEditForm"
import { AddFriend } from "./friends/AddFriend"
import { Friends } from "./friends/Friends"
import { MessageEditForm } from "./PublicMessages/MessageEditForm";

export const ApplicationViews = () => {
  const [publicMessages, setPublicMessages] = useState([])
  const getMessages = () => {
    getPublicMessages().then((messages) => setPublicMessages(messages));
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
        <ArticleEditForm />
      </Route>

      {/* author: Gerson
      Purpose: If the route matches the message edit path then it will take the user to this page */}
      <Route path="/messages/:messageId(\d+)/edit">
        <MessageEditForm />
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
        <SentMessages getPublicMessages={getMessages} />
        <PublicMessages publicMessages={publicMessages} getPublicMessages={getMessages} />
      </Route>
      <Route exact path="/tasks">
        <TaskList />
      </Route>
      <Route path="/tasks/create">
        <TaskForm />
      </Route>
      <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  );
};
