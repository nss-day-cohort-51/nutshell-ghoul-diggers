import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { EventEditForm } from "./events/EventEditForm"


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <Route exact path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <Route exact path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
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
  )
}
