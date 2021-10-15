//Author: Susie Stanley
//Purpose: Defines component EventList that renders a list of all the upcoming and past events

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventCard } from './EventCard';
import { getAllEvents, deleteEvent } from './EventManager';
import "./Event.css"

export const EventList = () => {
  // The initial state is an empty array
  const [ remainingEvents, setRemainingEvents] = useState([]);
  const [ firstUpcomingEvent, setFirstUpcomingEvent ] = useState({})
  const [ futureEvents, setFutureEvents ] = useState([])
  const [ pastEvents, setPastEvents ] = useState([])

// grabs all events from API, makes a copy, filters through each event and returns array of the objects dated after today
  const getFutureEvents = () => {
    const today = new Date();
    const parsedToday = today.getTime()
    return getAllEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      const futureDatedEvents = copyOfEvents.filter(function (evt) {
          let evtDate = Date.parse(evt.date);
          if (evtDate > parsedToday) {
            return evt
          }
      })
      setFutureEvents(futureDatedEvents);
    }); 
  };

// grabs all events from API, makes a copy, filters through each event and returns array of the objects dated before today
  const getPastEvents = () => {
    const today = new Date();
    const parsedToday = today.getTime()
    return getAllEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      const pastDatedEvents = copyOfEvents.filter(function (evt) {
          let evtDate = Date.parse(evt.date);
          if (evtDate < parsedToday) {
            return evt
          }
      })
      pastDatedEvents.reverse() //reverses order of array so most recent event is at top of list
      setPastEvents(pastDatedEvents);
    }); 
  };

// saves a copy of futureEvents array from state then grabs the first event and sets that to state
  const showFirstUpcomingEvent = () => {
    const copyOfFutureEvents = [...futureEvents]
    const firstEventObj = copyOfFutureEvents.shift()
    setFirstUpcomingEvent(firstEventObj)
  }

// saves a copy of futureEvents array, removes first object and sets remaining events to state as 'events'
  const showRemainingUpcomingEvents = () => {
    const copyOfFutureEvents = [...futureEvents]
    copyOfFutureEvents.shift();
    const remainingFutureEvents = copyOfFutureEvents;
    setRemainingEvents(remainingFutureEvents);
    }

// deletes event when button clicked
  const handleDeleteEvent = id => {
    deleteEvent(id)
    .then(() => {
      getFutureEvents()
      getPastEvents()
      showFirstUpcomingEvent()
      showRemainingUpcomingEvents()
    });
  }
  
// getFutureEvents gets all future events from API and saves the array to state as 'futureEvents' on first render only
  useEffect(() => {
    getFutureEvents();
  }, []);

// getPastEvents gets all past events from API and saves the array to state as 'pastEvents' on first render only
  useEffect(() => {
    getPastEvents();
  }, []);

// showFirstUpcomingEvent makes a copy of all futureEvents, grabs first event from array and saves it to state as 'firstUpcomingEvent' on first render only
  useEffect(() => {
    showFirstUpcomingEvent();
  }, [futureEvents]);

// showRemainingUpcomingEvents makes a copy of all futureEvents, removes first event and saves the rest to state as 'events' on first render only
  useEffect(() => {
    showRemainingUpcomingEvents();
  }, [futureEvents]);

    return(

      <div className="section__events">

        <div className="section__header">
        Events
        </div> 

        <div className="section__content">
          <Link to={`/events/create`}><button className="add__event">+ Add An Event</button></Link>
        </div>

        <div className="container">

          <div className="first__upcoming">
            <h2>UPCOMING EVENTS</h2>
            {<EventCard
              key={firstUpcomingEvent?.id}
              event={firstUpcomingEvent}
              card="card__content1"
              handleDeleteEvent={handleDeleteEvent} /> }
          </div>

          <div className="remaining__upcoming">
    
            {remainingEvents.map(event =>
              <EventCard
                key={event?.id}
                event={event}
                card="card__content2"
                handleDeleteEvent={handleDeleteEvent} />
                
        )}
          </div>

          <div className="past"><h2>PAST EVENTS</h2>
            {pastEvents.map(event =>
              <EventCard
                key={event?.id}
                event={event}
                card="card__content2"
                handleDeleteEvent={handleDeleteEvent} />

                
        )}
          </div>

        </div>

      </div>
    );
};