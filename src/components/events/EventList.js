import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventCard } from './EventCard';
import { getAllEvents, deleteEvent } from './EventManager';


export const EventList = () => {
  // The initial state is an empty array
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    // After the data comes back from the API, we
    //  use the setEvents function to update state
    return getAllEvents().then(eventsFromAPI => {
      setEvents(eventsFromAPI);
    });
  };

  const handleDeleteEvent = id => {
    deleteEvent(id)
    .then(() => getAllEvents().then(setEvents));
  };
  
  // got the events from the API on the component's first render
  useEffect(() => {
    getEvents();
  }, []);
  
    return(

      <div className="section">

        <div className="section__header">
        EVENTS
        </div> 

        <div className="section__content">
          <Link to={`/events/create`}><button>Add An Event</button></Link>
        </div>

        <div className="container">
        {events.map(event =>
        <EventCard
          key={event.id}
          event={event}
          handleDeleteEvent={handleDeleteEvent} />)}
        </div>

      </div>
    );
};