//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing event


import React, { useState, useEffect } from "react"
import { update, getEventById } from "./EventManager"
import { useParams, useHistory } from "react-router-dom"
import "./Event.css"


export const EventEditForm = () => {
  const [event, setEvent] = useState({ name: "", date: "", city: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {eventId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEvent = {
      id: eventId,
      name: event.name,
      date: event.date,
      city: event.city
    };

  update(editedEvent)
    .then(() => history.push("/events")
    )
  }

  useEffect(() => {
    getEventById(eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <div className="form__flex">

        <form>

          <div className="form__title">Edit Event
          </div>

          <fieldset>

            <div className="form__group">

              <label htmlFor="name">Event Name:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="name"
                value={event.name}
              />

              <label htmlFor="date">Event Date:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="date"
                value={event.date}
              />

              <label htmlFor="city">Event City:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="city"
                value={event.city}
              />

            </div>

          </fieldset>

          <div className="form__btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingEvent}
                className="form__btn">Submit
                </button>

              <button
                type="button"
                onClick={() => history.push(`/events`)}
                className="form__btn">Cancel
                </button>

          </div>

        </form>

      </div>
    </>
  );
}