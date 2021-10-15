//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add an event

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addEvent } from "./EventManager";
import "./Event.css"

export const EventForm = () => {
	// Defining initial state of the form inputs with useState()
	const [ event, setEvent ] = useState({
		name: "",
		date: "",
		city: "",
    zipcode: "",
    userId: parseInt(sessionStorage.getItem("nutshell_user"))
	});

	const history = useHistory();

	//When a field changes, it updates state. The return will re-render and display based on the values in state
	//Controlled component
  const ResetForm = () => {
    setEvent({
      name: "",
      date: "",
      city: "",
      zipcode: "",
      userId: parseInt(sessionStorage.getItem("nutshell_user"))
    });
    console.log("resetForm invoked")
  }

  const goBack = () => { history.push("/events") }; //takes user back to list

	const handleControlledInputChange = (evt) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newEvent = { ...event }
		let selectedVal = evt.target.value

		/* Sets the property to the new value
		using object bracket notation. */
		newEvent[evt.target.id] = selectedVal
		// update state
		setEvent(newEvent)
	}

  const FiveDigitZipCode = (zipcode) => {
    var zipcodeformat = /^[0-9]{5}?$/;
    if(zipcode.match(zipcodeformat)) {
    }
    else {
    return false;
    }
  }
  

	const handleClickSaveEvent = (evt) => {
		evt.preventDefault() //Prevents the browser from submitting the form

		if ( event.name === "" || event.date === "" || event.city === "" ) {
			window.alert("Please Fill Out All Required Info")
    } else if ( event.zipcode.length !== 5 || FiveDigitZipCode(event.zipcode) ) {
      window.alert("Please Enter A 5 digit Zipcode") 
    } else {
			//invoke addEvent, passing event as an argument
			//once completed, this changes the url and displays the event list
			addEvent(event)
				.then(() => history.push("/events"))
		}
	}

	return (
    <div className="form__flex">
      <form>
        <div className="form__title">Add New Event</div>
        <fieldset>

          <div className="form__group">
            <label htmlFor="name">Event name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form__group--edit" placeholder="Event Name" value={event.name} />
          </div>

          <div className="form__group">

            <label htmlFor="date">Date of Event</label>
            <input type="date" id="date" onChange={handleControlledInputChange} required className="form__group--edit" value={event.date} />

            <label htmlFor="city">Event City:</label>
            <input type="text" id="city" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="Event City" value={event.city} />

            <label htmlFor="zipcode">Event Zipcode:</label>
            <input type="text" id="zipcode" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="5 digit Zipcode" value={event.zipcode}/>

          </div>
        </fieldset>

        <div className="form__btns">

          <button className="form__btn"
            onClick={handleClickSaveEvent}>
            Submit
          </button>

          <button className="form__btn"
            onClick={ResetForm}>
            Reset Form
          </button>

          <button className="form__btn"
            onClick={goBack}>
            Cancel
          </button>

        </div>

      </form>
    </div>
	)
};

