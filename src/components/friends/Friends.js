//Author: Brady Williams
//Purpose: Output List of friends to DOM

import React, {useState, useEffect } from "react";
import { deleteFriend, getFriendsById } from "./FriendManager";
import { FriendCard } from "./FriendCard";
import { useHistory } from "react-router";
import "./Friend.css"

export const Friends = () => {
    const [friends, changeFriends] = useState([])

    const history = useHistory();

    const getFriends = () => {
        getFriendsById(sessionStorage.getItem("nutshell_user")).then(response => {
            changeFriends(response);
        })
    }

    const handleDelete = (friendId) => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        deleteFriend(friendId).then(() => getFriendsById(sessionStorage.getItem("nutshell_user")).then(changeFriends))
        console.log(friendId);
      };

    useEffect(() => {
        getFriends();
    }, [])

    return (
        <section className="section__friend">
        <div className="friend-card">
        <button className="friend-card__addFriend" onClick={() => {history.push("/friends/add")}}>Add Friend</button>
        {friends.map(friend => <FriendCard key={friend.id} friend={friend} handleDelete={handleDelete} />)}
        </div>
        </section>
    )
}