//Author: Brady Williams
//Purpose: Add Friends to the database and output

import React, { useState } from "react";
import { useHistory } from "react-router";
import { getallUsers } from "../users/UserManager";
import { addFriends } from "./FriendManager";
import "./Friend.css"


export const AddFriend = () => {

    const [friend, setFriend] = useState({ userId: "", currentUserId: "" });
    const [conflictDialog, setConflictDialog] = useState(false);
    const [conflictDialog2, setConflictDialog2] = useState(false)

    const history = useHistory();

    const checkUser = (input) => {
        console.log(input)
        getallUsers().then(response => {
            response.forEach(taco => {
                if (taco.name === input) {

                    const obj = {
                        userId: taco.id,
                        currentUserId: parseInt(sessionStorage.getItem("nutshell_user"))
                    }

                    setFriend(obj);

                }
            })
        })
    }

    const handleSave = () => {
        console.log(friend);

        if (friend.userId === "") {
            console.log("friend.userId === ''")
            setConflictDialog(true)
        } else if (friend.userId === friend.currentUserId) {
            console.log("friend.userId === friend.currentUserId")
            setConflictDialog2(true)
        } else {
            console.log("else")
            addFriends(friend).then(() => history.push("/friends"))
        }
    }

    return (
<>

    <div className="form__flex">

    <div className="form__title">Add Friend</div>

        <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
                <div className="friend__dialog">Please Input User's First &#38; Last Name</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <dialog className="dialog" open={conflictDialog2}>
                <div className="friend__dialog">Cannot Add Yourself</div>
                <button className="button--close" onClick={e => setConflictDialog2(false)}>Close</button>
            </dialog>

            <div className="form__group">
                <label htmlFor="name">User Name: </label>
                <input type="text" id="name" onChange={event => checkUser(event.target.value)} className="form__group--edit" placeholder="Enter Users Name" />
            </div>

        </fieldset>

        <div className="form__btns">
                <button type="button" className="form__btn" onClick={() => handleSave()}>Submit</button>
                <button className="form__btn" onClick={() => history.push("/friends")}>Cancel</button>
        </div>

    </div>
</>
    )
}