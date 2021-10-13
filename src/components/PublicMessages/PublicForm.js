//Author: Gerson M. Diketama
//Purpose: Edit exisiting Messages.


import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import { editMessages, messageById } from "./PublicMessageManager";


export const MessageEdit = () =>
{
    const[edits, setEdits] = useState({post:""})
    const{messageId} = useParams()
    const history = useHistory()

    const hadleFields = evt => 
    {
        const stateTochange = {...edits}
        stateTochange[evt.target.id] = evt.target.value
        setEdits(stateTochange)
    }



    const updateMessage = evt =>
    {
        evt.preventDefault()

        const updateMessages = {
            id: messageId,
            userId: parseInt(sessionStorage.getItem("nutshell_user")),
            post: edits.post
        }

        editMessages(updateMessages)
        .then(() => history.push("/messages"))
    }


    useEffect(() => {
        messageById(messageId)
        .then(messages => setEdits(messages))
    },[])

    return(
        <form>
            <input value={edits.post} id="post" type="text" onChange={hadleFields}/>
            <button onClick={updateMessage}>Save</button>
        </form>
    )
}