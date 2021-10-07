import React from 'react'
import {AiFillDelete} from "react-icons/ai"

const MessageList = ({data, handledelete}) => {
    return (
        <div>
            <h4>{data.post} <button onClick={() =>handledelete(data.id)}><AiFillDelete/></button></h4>
        </div>
    )
}
export default MessageList
