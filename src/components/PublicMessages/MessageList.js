//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import {AiTwotoneEdit} from "react-icons/ai"
import { useHistory } from 'react-router'


const MessageList = ({data, handledelete, handleAddFriend}) => {
    return (
        <div>
            <h2>{data.user.name}</h2>
            <h4>{data.post}</h4>
            <button onClick={() =>handledelete(data.id)}><AiFillDelete/></button>
            <button onClick={() => handleAddFriend(data.user.id)}>Add as friend</button>
        </div>
    )
}
export default MessageList