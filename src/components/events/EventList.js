import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventCard } from './EventCard';
import { getAllEvents, deleteEvent } from './EventManager';


export const EventList = () => {
  // The initial state is an empty array
  const [events, setEvents] = useState([]);
  const [ firstUpcomingEvent, setFirstUpcomingEvent ] = useState({})
  const [ futureEvents, setFutureEvents ] = useState([])
  const [ pastEvents, setPastEvents ] = useState([])


  const getEvents = () => {
    // After the data comes back from the API, we
    //  use the setEvents function to update state
    return getAllEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      copyOfEvents.shift();
      const remainingEvents = copyOfEvents;
      setEvents(remainingEvents);
    });
  };

  const getFutureEvents = () => {
    const today = new Date();
    const parsedToday = today.getTime()
    console.log("parsedToday is saved as: ", parsedToday)
    return getAllEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      const futureDatedEvents = copyOfEvents.filter(function (evt) {
        let evtDate = Date.parse(evt.date);
        if (evtDate > parsedToday) {
          return evt
        }
      })
      console.log("futureDatedEvents above setFutureEvents is: ", futureDatedEvents)
      setFutureEvents(futureDatedEvents);
    }); 
  };

  const getPastEvents = () => {
    const today = new Date();
    const parsedToday = today.getTime()
    console.log("parsedToday is saved as: ", parsedToday)
    return getAllEvents().then(eventsFromAPI => {
      const copyOfEvents = [...eventsFromAPI]
      const pastDatedEvents = copyOfEvents.filter(function (evt) {
        let evtDate = Date.parse(evt.date);
        if (evtDate < parsedToday) {
          return evt
        }
      })
      console.log("futureDatedEvents above setFutureEvents is: ", pastDatedEvents)
      setPastEvents(pastDatedEvents);
    }); 
  };

  const showUpcomingEvents = () => {
      const copyOfFutureEvents = [...futureEvents]
      console.log("copyOfFutureEvents is: ", copyOfFutureEvents)
      const firstEventObj = copyOfFutureEvents.shift()
      setFirstUpcomingEvent(firstEventObj)
      console.log("firstUpcomingEvent is: ", firstUpcomingEvent)
  }

  const handleDeleteEvent = id => {
    deleteEvent(id)
    .then(() => getAllEvents().then(setEvents));
  };
  
  // got the events from the API on the component's first render
  useEffect(() => {
    getEvents();
  }, []);
  
  useEffect(() => {
    getFutureEvents();
  }, []);

  useEffect(() => {
    getPastEvents();
  }, []);

  useEffect(() => {
    showUpcomingEvents();
  }, [events]);

    return(

      <div className="section">

        <div className="section__header">
        EVENTS
        </div> 

        <div className="section__content">
          <Link to={`/events/create`}><button>Add An Event</button></Link>
        </div>

        <div className="container">
          
          {/* <div className="first">
            {<EventCard
              key={firstUpcomingEvent?.id}
              event={firstUpcomingEvent}
              handleDeleteEvent={handleDeleteEvent} /> }
          </div>
          <div className="remaining">
            {events.map(event =>
              <EventCard
                key={event?.id}
                event={event}
                handleDeleteEvent={handleDeleteEvent} />

                
        )}
          </div> */}

          <div className="future"><h2>UPCOMING EVENTS</h2>
            {futureEvents.map(event =>
              <EventCard
                key={event?.id}
                event={event}
                handleDeleteEvent={handleDeleteEvent} />

                
        )}
          </div>

          <div className="past"><h2>PAST EVENTS</h2>
            {pastEvents.map(event =>
              <EventCard
                key={event?.id}
                event={event}
                handleDeleteEvent={handleDeleteEvent} />

                
        )}
          </div>

        </div>

      </div>
    );
};