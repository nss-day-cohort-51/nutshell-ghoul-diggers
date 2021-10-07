import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addEvent } from "./EventManager";
import "./Event.css"

export const EventForm = () => {
	// Defining initial state of the form inputs with useState()
	const [ event, setEvent ] = useState({
		name: "",
		date: "",
		location: "",
    userId: 0 // find out how to autopopulate userId based on login, maybe sessionStorage.getItem("nutshell_user")
	});

	const history = useHistory();

	//When a field changes, it updates state. The return will re-render and display based on the values in state
	//Controlled component

  const ResetForm = () => {
    setEvent({
      name: "",
      date: "",
      location: "",
      userId: 0 // find out how to autopopulate userId based on login, see above
    });
    console.log("resetForm invoked")
  }

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

	const handleClickSaveEvent = (evt) => {
		evt.preventDefault() //Prevents the browser from submitting the form

		if ( event.name === "" || event.date === "" || event.location === "" ) {
			window.alert("Please fill out all required info")
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
        </fieldset>

        <fieldset>
          <div className="form__group">

            <label htmlFor="date">Date of Event</label>
            <input type="date" id="date" onChange={handleControlledInputChange} required className="form__group--edit" value={event.date} />

            <label htmlFor="location">Event Location:</label>
            <input type="text" id="location" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="Event Location" value={event.location} />

          </div>
        </fieldset>

        <div className="form__btns">

          <button className="form__btn"
            onClick={handleClickSaveEvent}>
            Save Event
          </button>

          <button className="form__btn"
            onClick={ResetForm}>
            Reset Form
          </button>

        </div>

      </form>
    </div>
	)
};

