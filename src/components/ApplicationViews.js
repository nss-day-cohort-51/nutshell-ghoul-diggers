import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { EventEditForm } from "./events/EventEditForm"
import { getFriendsById } from "./friends/FriendManager"
import { TaskEditForm } from "./tasks/TaskEditForm"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"
import React, { useState } from "react";
import { PublicMessages } from "./PublicMessages/PublicMessages";
import { getPublicMessages } from "./PublicMessages/PublicMessageManager";
import { ArticleForm } from "./articles/ArticleForm"
import { Articles } from "./articles/Articles"
import { ArticleEditForm } from "./articles/ArticleEditForm"
import { AddFriend } from "./friends/AddFriend"
import { Friends } from "./friends/Friends"
import { MessageEditForm } from "./PublicMessages/MessageEditForm";
import { Dashboard } from "../Dashboard";
import { SentMessages } from "../components/PublicMessages/SentMessages"

export const ApplicationViews = () => {
  const [messages, setPublicMessages] = useState([])
  const [friends, changeFriend] = useState([]);

  const getMeMesssage = () => {
    console.log("getmemessage")
    getPublicMessages().then((message) => setPublicMessages(message));
  };

  const getFriendsList = () => {
    let arrayTaco = [];

    getFriendsById(parseInt(sessionStorage.getItem("nutshell_user"))).then(res => {
        res.forEach(taco => {
            arrayTaco.push(taco.userId);
        })
        changeFriend(arrayTaco);
    })
  };

  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <Dashboard />
      </Route>

      <Route exact path="/articles">
        {/* Render the component for news articles */}
        <Articles />
      </Route>

      <Route exact path="/articles/add">
        {/* Render the component for adding articles*/}
        <ArticleForm />
      </Route>

      <Route exact path="/articles/:articleId(\d+)/edit">
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

      <Route exact path="/friends/add">
        {/* Render the component for adding friends */}
        <AddFriend />
      </Route>

      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <SentMessages getPublicMessages={getMeMesssage} />
        <PublicMessages messages={messages} getPublicMessages={getMeMesssage} friends={friends} getFriendsList={getFriendsList}/>
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
