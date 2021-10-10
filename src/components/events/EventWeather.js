//Author: Susie Stanley
//Purpose: Defines EventWeather component that fetches and displays weather data from weatherAPI

import React from 'react';
import { useState, useEffect } from 'react';
import "./Event.css"
import { getWeatherByDateAndZip } from "../events/WeatherManager"

export const EventWeather = ( { event } ) => {
  console.log("Inside EventWeather the event is: ", event);
  const [ theWeather, setTheWeather ] = useState({ high: "", low: "", avg: "", condition: "", icon: "" })
  const eventDate = event.date;
  const zipcode = event.zipcode;

  useEffect(() => {
    getWeatherByDateAndZip(eventDate, zipcode)
    .then(weather => {
      setTheWeather({
        high: weather.forecast.forecastday[0].day.maxtemp_f,
        low: weather.forecast.forecastday[0].day.mintemp_f,
        avg: weather.forecast.forecastday[0].day.avgtemp_f,
        condition: weather.forecast.forecastday[0].day.condition.text,
        icon: weather.forecast.forecastday[0].day.condition.icon
      });
      })
     }, []);

  const formatDate = (obj) => {
    const date = new Date(obj);
    const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
    return formattedDate;
  }

  const formatTemp = (obj) => {
    const temp = Math.round(obj); // this rounds the temp to a whole number
    return temp;
  }

  return ( 
    <>
    <div className="forecast__flex">

      <div className="forecast__title">{event.name} Forecast</div>

      <div className="forecast__wrap">
      <div className="forecast__label">Temp: </div>
      <div className="forecast__info"> {formatTemp(theWeather.avg)}°</div>
      </div>

      <div className="forecast__wrap">
      <div className="forecast__label">High: </div>
      <div className="forecast__info"> {formatTemp(theWeather.high)}°</div>
      </div>

      <div className="forecast__wrap">
      <div className="forecast__label">Low: </div>
      <div className="forecast__info"> {formatTemp(theWeather.low)}°</div>
      </div>

      <div className="forecast__wrap">
      <div className="forecast__wrap"></div>
      <div className="forecast__label">Conditions: </div>
      <div className="forecast__info"> {theWeather.condition}</div>
      </div>

      {/* <picture>
          {theWeather.icon !== "" ?
          <img src={require(`http:${theWeather.icon}`).default} alt="weather icon" className=""/> 
          : <p>There isn't an icon available</p>}
      </picture> */}

      {/* <div className="forecast__icon">Icon Goes Here {theWeather.icon}</div> */}


    </div>
    </>
  );
}
