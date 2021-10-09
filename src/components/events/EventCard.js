//Author: Susie Stanley
//Purpose: Creates and displays individual event cards for a single event that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
import { EventWeather } from "./EventWeather"
import "./Event.css"
import {FaEdit, FaTrash } from "react-icons/fa"
import { TiWeatherPartlySunny } from "react-icons/ti"
import Popup from 'reactjs-popup';

export const EventCard = ({ event, handleDeleteEvent, card }) => {
  const Modal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

    return (
    <>
        <div className={card}>

        
          <div className="event__info">

            <div className="event__info--name"><strong>Name: </strong> {event?.name}</div>

            <div className="event__info--details"><strong>Date: </strong> {event?.date}</div>

            <div className="event__info--details"><strong>City: </strong> {event?.city}</div>

            <div className="event__info--details"><strong>Zipcode: </strong> {event?.zipcode}</div>


          </div>

          <div className="remove__item">

          {/* <Link to={`/events/${event?.id}`}><button>Details</button></Link> */}
          <Link to={`/events/${event?.id}/edit`}><button className="button sm"><FaEdit/></button></Link>

          <button type="button" className="button sm" onClick={() => handleDeleteEvent(event?.id)}><FaTrash /></button>
          <button type="button" className="button lg" onClick={() => EventWeather(event?.date, event?.zipcode)}><TiWeatherPartlySunny /></button>


          </div>

        </div>
    </>
    )
}


