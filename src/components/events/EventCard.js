import React from "react"
import { Link } from "react-router-dom";
import { EventWeather } from "./EventWeather"
import "./Event.css"

export const EventCard = ({ event, handleDeleteEvent }) => {
    return (
    <>
        <div className="card__content">
        
          <div className="event__info">

            <div className="event__info--name"><strong>Name: </strong> {event?.name}</div>

            <div className="event__info--details"><strong>Date: </strong> {event?.date}</div>

            <div className="event__info--details"><strong>Location: </strong> {event?.location}</div>

            <div className="event__info--details"><strong>Zipcode: </strong> {event?.zipcode}</div>


          </div>

          <div className="remove-item">

          {/* <Link to={`/events/${event?.id}`}><button>Details</button></Link> */}
          <Link to={`/events/${event?.id}/edit`}><button>Edit</button></Link>

          <button type="button" onClick={() => handleDeleteEvent(event?.id)}>Remove</button>
          <button type="button" onClick={() => EventWeather(event?.location)}>Forecast</button>

          </div>
          
        </div>
    </>
    )
}

