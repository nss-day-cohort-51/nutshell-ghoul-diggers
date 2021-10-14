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
    {   message, 
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
    if(friends.includes(message.user.id) === true){
        return (
            <div className="message__list__flex">
                
                <div className="card__content--messages">

                    <div className="message__info">

                        <div className="message__info--name"><strong>{message.user.name} </strong></div>

                        <div className="message__info--field"><strong>Message: </strong>{message.post}</div>

                        <div className="message__info--date"><strong>Posted On: </strong> {formatDate(message.timestamp)} at {formatTime(message.timestamp)}</div>

                    </div>

                </div>
            
            </div>
        )
    }
    // returns posts and Add Friend button
    else if(message.user.id !== parseInt(sessionStorage.getItem("nutshell_user"))){
        return (
            <div className="message__list__flex">
                
                <div className="card__content--messages">

                    <div className="message__info">

                        <div className="message__info--name"><strong>{message.user.name} </strong></div>

                        <div className="message__info--field"><strong>Message: </strong>{message.post}</div>

                        <div className="message__info--date"><strong>Posted On: </strong> {formatDate(message.timestamp)} at {formatTime(message.timestamp)}</div>

                    </div>
                    <div className="form__btn--wrapper">
                        <button 
                                type="button"
                                className="form__btn--friend"
                                onClick={() => handleAddFriend(message.user.id)}>
                                    + Add Friend
                        </button>
                    </div>

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

                    <div className="message__info--name"><strong>{message.user.name} </strong></div>

                    <div className="message__info--field"><strong>Message: </strong>{message.post}</div>

                    <div className="message__info--date"><strong>Posted On: </strong> {formatDate(message.timestamp)} at {formatTime(message.timestamp)}</div>

                </div>

                <div className="remove__item--message">

                    <button 
                    className="button sm"
                    onClick={() => history.push(`/messages/${message.id}/edit`)}>
                        <FaEdit/>
                    </button>

                    <button 
                    type="button" 
                    className="button sm" 
                    onClick={() => handledelete(message.id)}>
                        <FaTrash />
                    </button>

                </div>

            </div>

        </div>
        )
    }
}