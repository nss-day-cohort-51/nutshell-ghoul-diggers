//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React from 'react'
import {FaEdit, FaTrash } from "react-icons/fa"
import { useHistory } from 'react-router'
import "./Message.css"

const formatDate = (obj) => {
    const date = new Date(obj);
    const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
    return formattedDate;
  }
  
  const formatTime = (obj) => {
    const date = new Date(obj);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // converts date object to a time string that displays in format 12:25"
    return formattedTime;
  }

const MessageCard = ({data, handledelete}) => {
    const history = useHistory()
    return (
<>
<div className="card__content">

        <div className="message__info">

            <div><strong>Message: </strong>{data.post}</div>

            <div className="message__info__field"><strong>Posted By: </strong> {data.user.name}</div>

            <div className="message__info__field"><strong>Posted On: </strong> {formatDate(data.timestamp)} at {formatTime(data.timestamp)}</div>

        </div>

        <div className="remove__item">

            <button 
            className="button sm"
            onClick={() => history.push(`/messages/${data.id}/edit`)}>
                <FaEdit/>
            </button>

            <button 
            type="button" 
            className="button sm" 
            onClick={() => handledelete(data.id)}>
                <FaTrash />
            </button>

        </div>

</div>
</>
    )
}
export default MessageCard