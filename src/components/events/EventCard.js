//Author: Susie Stanley
//Purpose: Creates and displays individual event cards for a single event that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
import "./Event.css"
import {FaEdit, FaTrash } from "react-icons/fa"
import { WeatherApp } from "../events/WeatherApp";


const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
}

export const EventCard = ({ event, handleDeleteEvent, card }) => {
    return (
    <>
        <div className={card}>
        
          <div className="event__info">

            <div><strong>Name:  {event?.name}</strong></div>

            <div><strong>Date: </strong> {formatDate(event?.date)}</div>

            <div><strong>City: </strong> {event?.city}</div>

            <div><strong>Zipcode: </strong> {event?.zipcode}</div>

          </div>

          <div className="remove__item">

            <Link to={`/events/${event?.id}/edit`}><button className="button sm"><FaEdit/></button></Link>

            <button type="button" className="button sm" onClick={() => handleDeleteEvent(event?.id)}><FaTrash /></button>

          {/* the WeatherApp component renders the weather button on each EventCard */}
          <WeatherApp event={event} />

          </div>

        </div>
    </>
    )
}


