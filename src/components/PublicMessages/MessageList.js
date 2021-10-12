//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import "../articles/ArticleCardDesign.css"


const MessageList = ({data, handledelete, handleAddFriend, friends, getFriendsList}) => {

    const history = useHistory();

    useEffect(() => {
        getFriendsList();
    }, []);


    if(friends.includes(data.user.id) === true){
            return (
                <div>
                    <h2>{data.user.name}</h2>
                    <h4>{data.post}</h4>
                </div>
            )
    }
    
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
    
    else{
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

export default MessageList