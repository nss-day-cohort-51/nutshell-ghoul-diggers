//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React from 'react'
import { Link } from "react-router-dom";
import {FaEdit, FaTrash } from "react-icons/fa"
import { useHistory } from 'react-router'


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

<Link to={`/messages/${data.id}/edit`}><button className="button sm"><FaEdit/></button></Link>

    <button onClick={() =>handledelete(data.id)}> <FaTrash /></button>

    <button onClick={() => history.push(`/messages/${data.id}/edit`)}><FaEdit/></button>

    <button type="button" className="button sm" onClick={() => handledelete(data.id)}><FaTrash /></button>

</div>

</div>

        <div className="message__container">
            <h4>{data.post} 
            
            <button onClick={() =>handledelete(data.id)}><FaTrash /></button> <button onClick={() => history.push(`/messages/${data.id}/edit`)}><FaEdit/></button></h4>
        </div>
</>
    )
}
export default MessageCard