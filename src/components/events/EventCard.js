//Author: Susie Stanley
//Purpose: Creates and displays individual event cards for a single event that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
import "./Event.css"
import {FaEdit, FaTrash } from "react-icons/fa"
import { App } from "../events/App";

export const EventCard = ({ event, handleDeleteEvent, card }) => {
    return (
    <>
        <div className={card}>
        
          <div className="event__info">

            <div className="event__info--name"><strong>Name:  {event?.name}</strong></div>

            <div className="event__info--details"><strong>Date: </strong> {event?.date}</div>

            <div className="event__info--details"><strong>City: </strong> {event?.city}</div>

            <div className="event__info--details"><strong>Zipcode: </strong> {event?.zipcode}</div>

          </div>

          <div className="remove__item">

          <Link to={`/events/${event?.id}/edit`}><button className="button sm"><FaEdit/></button></Link>

          <button type="button" className="button sm" onClick={() => handleDeleteEvent(event?.id)}><FaTrash /></button>

          {/* the App component renders the weather button on each EventCard */}
          <App event={event} />

          </div>

        </div>
    </>
    )
}


