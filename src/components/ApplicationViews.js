import React from "react"
import { Route } from "react-router-dom"
import { Articles } from "./articles/Articles"
import { AddFriend } from "./friends/AddFriend"
import { Friends } from "./friends/Friends"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <Articles />
      </Route>
      <Route exact path="/friends">
        {/* Render the component for list of friends */}
        <Friends />
      </Route>
      <Route path="/friends/add">
        {/* Render the component for list of friends */}
        <p>working</p>
        <AddFriend /> 
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
