//Author: Susie Stanley
//Purpose: MessageCard is a component template that display individual cards for each message

import React, { useEffect } from 'react'
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


export const MessageCard = (
    {   data, 
        handledelete, 
        handleAddFriend, 
        friends, 
        getFriendsList 
    }) => {
    const history = useHistory()

    useEffect(() => {
        getFriendsList();
    }, []);

    // returns just the post
    if(friends.includes(data.user.id) === true){
        return (
            <div className="message__list__flex">
                
                <div className="card__content--messages">

                    <div className="message__info">

                        <div className="message__info--name"><strong>{data.user.name} </strong></div>

                        <div className="message__info--field"><strong>Message: </strong>{data.post}</div>

                        <div className="message__info--date"><strong>Posted On: </strong> {formatDate(data.timestamp)} at {formatTime(data.timestamp)}</div>

                    </div>

                </div>
            
            </div>
        )
    }
    // returns posts and Add Friend button
    else if(data.user.id !== parseInt(sessionStorage.getItem("nutshell_user"))){
        return (
            <div className="message__list__flex">
                
                <div className="card__content--messages">

                    <div className="message__info">

                        <div className="message__info--name"><strong>{data.user.name} </strong></div>

                        <div className="message__info--field"><strong>Message: </strong>{data.post}</div>

                        <div className="message__info--date"><strong>Posted On: </strong> {formatDate(data.timestamp)} at {formatTime(data.timestamp)}</div>

                    </div>

                    <button 
                            type="button"
                            className="form__btn--friend"
                            onClick={() => handleAddFriend(data.user.id)}>
                                + Add Friend
                    </button>

                </div>
            
            </div>
        )
    }
    // returns post and Edit and Delete buttons
    else {
        return (

        <div className="message__list__flex">
            
            <div className="card__content--messages">

                <div className="message__info">

                    <div className="message__info--name"><strong>{data.user.name} </strong></div>

                    <div className="message__info--field"><strong>Message: </strong>{data.post}</div>

                    <div className="message__info--date"><strong>Posted On: </strong> {formatDate(data.timestamp)} at {formatTime(data.timestamp)}</div>

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

        </div>
        )
    }
}