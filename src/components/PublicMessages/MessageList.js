//Author: Gerson Diketama
//Purpose: Card to display all the the message from API/ GET

import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import {AiTwotoneEdit} from "react-icons/ai"
import { useHistory } from 'react-router'


const MessageList = ({data, handledelete}) => {
    const history = useHistory()
    return (
        <div>
            <h3>{data.name}</h3>
            <h4>{data.post} <button onClick={() =>handledelete(data.id)}><AiFillDelete/></button> <button onClick={() => history.push(`/messages/${data.id}/edit`)}><AiTwotoneEdit/></button>
            </h4>
        </div>
    )
}
export default MessageList