//Author: Brady Williams
//Purpose: Add Friends to the database and output

import React, {useState} from "react";
import { useHistory } from "react-router";
import { getallUsers } from "../users/UserManager";
import { addFriends } from "./FriendManager";

export const AddFriend = () => {
    
    const [friend, setFriend] = useState({userId: "", currentUserId: ""});

	const history = useHistory();

    const checkUser = (input) => {
        console.log(input)
        getallUsers().then(response => {
            response.forEach(taco => {
                if(taco.name === input){
                    
                    const obj = {
                        userId: taco.id,
                        currentUserId: parseInt(sessionStorage.getItem("nutshell_user"))
                    }
                    console.log(obj)
                    setFriend(obj);
                    
                }
            })
        })
    }

    const handleSave = () => {
        
        console.log(friend);

        if(friend.userId === ""){
            console.log("Invalid User");
        }else if(friend.userId === friend.currentUserId){
            console.log("Cannot Add Yourself");
        }else {
            addFriends(friend).then(() => history.push("/friends"))
        }
    }



    return (
        <fieldset>
				<div className="form-group">
					<label htmlFor="name">User Name: </label>
					<input type="text" id="name" onChange={event => checkUser(event.target.value)} className="form-control" placeholder="User Name" />
                    <button className="save__button" onClick={() => handleSave().then()}>Save</button>
                    <button className="cancel__button" onClick={() => history.push("/friends")}>Cancel</button>
				</div>
		</fieldset>
    )


}