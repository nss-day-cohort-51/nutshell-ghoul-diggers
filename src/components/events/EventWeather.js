//Author: Susie Stanley
//Purpose: Multiple components that fetch and display weather data from openweathermap API

import React from 'react';
// import { useHistory } from "react-router-dom";
import "./Event.css"
import { Settings } from "../auth/Settings"

const key = Settings.weatherKey;


export const EventWeather = ( {date, zipcode} ) => {
  console.log("The forecast for " + date + " is " + zipcode);
}

//Used to get 5 day weather report by zip code
export const getWeatherByZip = (zip) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${key}`;
  
  return fetch(url)
      .then(response => response.json())
      .then(parsedResponse => {
          return parsedResponse;
      })
  
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

export const addWeather = (weatherList, zipCode) => {

  const eventDateWeather = formatDate(weatherList[0].dt_txt);
  const eventDateTemp = formatTemp(weatherList[0].main.temp);

  return ( 
    <>
      <span>Forecast For  in ${zipCode} &nbsp; (hover over cards for more info)</span>

    </>
  );
};