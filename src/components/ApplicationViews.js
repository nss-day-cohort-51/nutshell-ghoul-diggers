import React from "react"
import { Route } from "react-router-dom"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
        <p>Friends Path</p>
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route exact path="/tasks">
        <TaskList />
      </Route>
      <Route path="/tasks/create">
        <TaskForm />
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
