//Author: Gerson M. Diketama
//Purpose: Edit existing messages


import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import { editMessage, updateMessage, getMessageById } from "./PublicMessageManager";


export const MessageEditForm = () =>
{
    const[ message, setMessage] = useState({
        post: "",
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        timestamp: Date.now()
        });

    const{ messageId } = useParams();
    const history = useHistory();

    const handleEdit = evt => {
        evt.preventDefault()

        // this is an edit so we need the id
        const editedMessage = {
            id: messageId,
            post: message.post,
            userId: message.userId,
            timestamp: Date.now()
        };
        editMessage(editedMessage)
        .then(() => history.push("/messages")
        )
    }

    const handleChange = evt => {  
        const stateToChange = { ...message };
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
    }

    useEffect(() => {
        getMessageById(messageId)
        .then(messageInfo => setMessage(messageInfo))
    },[])

    return(
    <div className="message__flex--edit">

        <div className="form__title">Edit Message</div>

            <div className="message__input--edit">

                <div className="message__input--textarea">
                        <input
                            type="text"
                            id="post"
                            className="form__group--message"
                            value={message.post}
                            onChange={handleChange} required
                        />
                </div>

                <div className="message__input--btns">
                        <button
                            type="button"
                            className="form__btn" 
                            onClick={handleEdit}>
                                Save
                        </button>

                        <button
                            type="button"
                            onClick={() => history.push(`/messages`)}
                            className="form__btn">Cancel
                        </button>
                </div>

            </div>

    </div>
    )
}