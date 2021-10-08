import React from 'react'
import {AiFillDelete} from "react-icons/ai"

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
