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
            setConflictDialog(true)
        } else if (friend.userId === friend.currentUserId) {
            setConflictDialog2(true)
        } else {
            addFriends(friend).then(() => history.push("/friends"))
        }
    }



    return (
        <fieldset>
            <dialog className="dialog" open={conflictDialog}>
                <div>Please input a users first and last name</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <dialog className="dialog" open={conflictDialog2}>
                <div>Cannot add yourself</div>
                <button className="button--close" onClick={e => setConflictDialog2(false)}>Close</button>
            </dialog>

            <div className="form-group">
                <label htmlFor="name">User Name: </label>
                <input type="text" id="name" onChange={event => checkUser(event.target.value)} className="form-control" placeholder="Input first and last name" />
                <button className="save__button" onClick={() => handleSave()}>Save</button>
                <button className="cancel__button" onClick={() => history.push("/friends")}>Cancel</button>
            </div>
        </fieldset>
    )


}