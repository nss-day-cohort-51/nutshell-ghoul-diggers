//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React from 'react'
import {FaEdit, FaTrash } from "react-icons/fa"
import { useHistory } from 'react-router'
import "./Message.css"


const MessageCard = ({data, handledelete}) => {
    const history = useHistory()
    return (
<>
<div className="card__content">

        <div className="message__info">

            <div><strong>Message: </strong>{data.post}</div>
            <div><strong>Posted by: </strong> {data.userId} - {data.timestamp}</div>

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