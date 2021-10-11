import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { EventEditForm } from "./events/EventEditForm"

import { TaskEditForm } from "./tasks/TaskEditForm"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"
import React, { useState } from "react";
import { PublicMessages } from "./PublicMessages/PublicMessages";
import SentMessages from "./PublicMessages/SentMessages";
import { getPublicMessages } from "./PublicMessages/publicMessageManager";
import { AddArticle } from "./articles/AddArticle"
import { Articles } from "./articles/Articles"
import { EditForm } from "./articles/EditArticle"
import { AddFriend } from "./friends/AddFriend"
import { Friends } from "./friends/Friends"
import { MessageEdit } from "./PublicMessages/PublicForm";

export const ApplicationViews = () => {
  const [messages, setPublicMessages] = useState([])
  const getMeMesssage = () => {
    console.log("getmemessage")
    getPublicMessages().then((message) => setPublicMessages(message));
  };

  return (
    <>
      <Route exact path="/articles">
        {/* Render the component for news articles */}
        <Articles />
      </Route>

      <Route exact path="/articles/add">
        {/* Render the component for adding articles*/}
        <AddArticle />
      </Route>

      <Route exact path="/:articleId(\d+)/edit">
        <EditForm />
      </Route>

      <Route exact path="/messages/:messageId(\d+)/edit">
        <MessageEdit />
      </Route>

      <Route exact path="/friends">
        {/* Render the component for list of friends */}
        <Friends />
      </Route>

      <Route exact path="/friends/add">
        {/* Render the component for adding friends */}
        <AddFriend />
      </Route>

      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <PublicMessages messages={messages} getPublicMessages={getMeMesssage} />
        <SentMessages getPublicMessages={getMeMesssage} />
      </Route>

      <Route exact path="/tasks">
        <TaskList />
      </Route>

      <Route exact path="/tasks/create">
        <TaskForm />
      </Route>

      <Route exact path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>

      <Route exact path="/events/create">
        <EventForm />
      </Route>

      <Route exact path="/events/:eventId(\d+)/edit">
        <EventEditForm />
      </Route>
    </>
  );
};
