//Author: Gerson M. Diketama
//Purpose: Edit existing messages


import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import { editMessages, getMessageById } from "./PublicMessageManager";


export const MessageEditForm = () =>
{
    const[edits, setEdits] = useState({post:"", timestamp: ""})
    const{messageId} = useParams()
    const history = useHistory()

    const handleFields = evt => 
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
            post: edits.post,
            timestamp: Date.now()
        }

        editMessages(updateMessages)
        .then(() => history.push("/messages"))
    }


    useEffect(() => {
        getMessageById(messageId)
        .then(messages => setEdits(messages))
    },[])

    return(
        <>

        <div className="message__input--edit">

            <div className="message__input--textarea">
                    <input
                        type="text"
                        className="form__group--message"
                        value={edits.post}
                        onChange={handleFields}
                    />
            </div>

            <div className="message__input--btns">
                    <button
                        type="button"
                        className="form__btn" 
                        onClick={updateMessage}>
                            Save
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push(`/messages`)}
                        className="form__btn">Cancel
                    </button>
            </div>

        </div>
        </>
    )
}