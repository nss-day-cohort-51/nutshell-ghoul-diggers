//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React, { useState } from 'react'
import {AiFillDelete} from "react-icons/ai"
import {AiTwotoneEdit} from "react-icons/ai"
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import { getFriendsById } from '../friends/FriendManager'
import { MessageEdit } from './PublicForm'
import { getPublicMessages } from './publicMessageManager'


const MessageList = ({data, handledelete, handleAddFriend}) => {

    const history = useHistory();

    const [friendId, changeFriend] = useState([]);
    const [disable, setDisable] = useState(false);

    let arrayTaco = [];

    const stateTaco = () => {
        arrayTaco = [];

        getFriendsById(parseInt(sessionStorage.getItem("nutshell_user"))).then(res => {
            res.forEach(taco => {
                arrayTaco.push(taco.userId);
            })

            changeFriend(arrayTaco);
        }
        )
    }

    useEffect(() => {
        stateTaco();
    }, [disable]);


    if(friendId.includes(data.user.id) === true){
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
                    setDisable(true);
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