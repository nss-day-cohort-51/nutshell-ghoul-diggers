//Author: Susie Stanley
//Purpose: Defines EventWeather component that fetches and displays weather data from weatherAPI

import React from 'react';
// import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import "./Event.css"
import { Settings } from "../auth/Settings"

const key = Settings.weatherKey;

export const EventWeather = ( eventDate, zipcode ) => {
  console.log("Inside EventWeather the eventDate is " + eventDate + " and the zipcode is " + zipcode);
  // const [ theWeather, setTheWeather ] =  useState({ day: "", high: "", low: "", avg: "", condition: "", icon: "" });

  let day = "";
  let high = "";
  let low = "";
  let avg = "";
  let condition = "";
  let icon = "";

  //Used to get weather forecast by date and zipcode
  const getWeatherByDateAndZip = ( eventDate, zipcode ) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=37064&days=10&dt=${eventDate}`;
    
    const weatherInfo =  fetch(url)
        .then(response => response.json())
        .then(weather => {
          console.log("weather from fetch inside weatherInfo is: ", weather)
            day = weather.forecast.forecastday[0].date;
            high = weather.forecast.forecastday[0].day.maxtemp_f;
            low = weather.forecast.forecastday[0].day.mintemp_f;
            avg = weather.forecast.forecastday[0].day.avgtemp_f;
            condition = weather.forecast.forecastday[0].day.condition.text;
            icon = weather.forecast.forecastday[0].day.condition.icon;
        })
        console.log("weatherInfo saved to variable is: ", weatherInfo)
        return weatherInfo
    }

  const formatDate = (obj) => {
    const date = new Date(obj);
    const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
    return formattedDate;
  }

  const formatTemp = (obj) => {
    const temp = Math.round(obj); // this rounds the temp to a whole number
    return temp;
  }


  getWeatherByDateAndZip(eventDate, zipcode);
  // useEffect(() => {
  //   getWeatherByDateAndZip(eventDate, zipcode)
  // }, []);

  return ( 
    <>
    <div className="forecast__flex">

      <div className="forecast__title">Forecast For ${formatDate(day)} ${zipcode}</div>
      <div className="forecast__info">High: ${formatTemp(high)}</div>
      <div className="forecast__info">Low: ${formatTemp(low)}</div>
      <div className="forecast__info">TEMP: ${formatTemp(avg)}</div>
      <div className="forecast__info">Conditions: ${condition}</div>
      <div className="forecast__info">Icon: ${icon}</div>

      <Link to={`/events`}><button className="button">Close</button></Link>

    </div>
    </>
  );
};
