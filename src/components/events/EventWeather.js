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
      if (weather.forecast.forecastday.length > 0) {
        setTheWeather({
          high: weather.forecast.forecastday[0].day.maxtemp_f,
          low: weather.forecast.forecastday[0].day.mintemp_f,
          avg: weather.forecast.forecastday[0].day.avgtemp_f,
          condition: weather.forecast.forecastday[0].day.condition.text,
          icon: "http:" + weather.forecast.forecastday[0].day.condition.icon
        });
        console.log("weather icon is: ", weather.forecast.forecastday[0].day.condition.icon)
      } else {
        console.log("weather info came back undefined")
        }
      })
     }, []);


  const formatTemp = (obj) => {
    const temp = Math.round(obj); // this rounds the temp to a whole number
    return temp;
  }

  return ( 
    <>
    {theWeather.icon !== "" ?

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
      
      { theWeather.icon ?
      <div className="forecast__icon"><img src={theWeather.icon} alt="weather icon" /></div>
      : <p> no icon available for today </p> }

    </div>
      : <p className="no__forecast">Forecast Info Not Available For This Date</p> }

    </>
  );
}
