import React, {useState} from "react";
import { Route } from "react-router-dom";
import { PublicMessages } from "./PublicMessages/PublicMessages";
import SentMessages from "./PublicMessages/SentMessages";
import { getPublicMessages } from "./PublicMessages/publicMessageManager";

export const ApplicationViews = () => {
  const[messages, setPublicMessages]= useState([])
  const getMeMesssage = () => {
    getPublicMessages().then((message) => setPublicMessages(message));
  };
  return (
    <>
      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
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
