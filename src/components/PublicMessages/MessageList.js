//Author: Gerson Diketama
//Purpose: Card to display all of the messages from API/ GET

import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import "../articles/Article.css"


export const MessageList = ({data, handledelete, handleAddFriend, friends, getFriendsList}) => {

    const history = useHistory();

    useEffect(() => {
        getFriendsList();
    }, []);

    // returns just the post
    if(friends.includes(data.user.id) === true){
            return (
                <div>
                    <h2>{data.user.name}</h2>
                    <h4>{data.post}</h4>
                </div>
            )
    }
    // returns posts and Add Friend button
    else if(data.user.id !== parseInt(sessionStorage.getItem("nutshell_user"))){
        return (
            <div>
                <h2>{data.user.name}</h2>
                <h4>{data.post}</h4>
                <button onClick={(event) => {
                    handleAddFriend(data.user.id, event)
                    }}>Add as friend</button>
            </div>
        )
    }
    // returns post and Edit and Delete buttons
    else {
        return (
            <div>
                <h2>{data.user.name}</h2>
                <h4>{data.post}</h4>
                <button onClick={() =>handledelete(data.id)}><AiFillDelete/></button>
                <button onClick={() => history.push(`/messages/${data.id}/edit`)}>Edit</button>
            </div>
        )
    }
}