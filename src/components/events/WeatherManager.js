import { Settings } from "../auth/Settings"

const key = Settings.weatherKey;

//Used to get weather forecast by date and zipcode
export const getWeatherByDateAndZip = ( date, zipcode ) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${zipcode}&days=10&dt=${date}`;
  
  return fetch(url)
      .then(response => response.json())
      .then(parsedResponse => {
          return parsedResponse;
      })
  }
