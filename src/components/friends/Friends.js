//Author: Brady Williams
//Purpose: Output List of friends to DOM

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { deleteFriend, getFriendsById } from "./FriendManager";
import { FriendCard } from "./FriendCard";
import "./Friend.css"

export const Friends = () => {
    const [friends, changeFriends] = useState([])

    const getFriends = () => {
        getFriendsById(sessionStorage.getItem("nutshell_user")).then(response => {
            changeFriends(response);
        })
    }

    const handleDelete = (friendId) => {
        //invoke the delete function and re-direct to the list
        deleteFriend(friendId).then(() => getFriendsById(sessionStorage.getItem("nutshell_user")).then(changeFriends))
        console.log(friendId);
    };

    useEffect(() => {
        getFriends();
    }, [])

    return (
        <div className="section__friends">

            <div className="section__header">
            Friends
            </div> 

            <div className="section__content">
                <Link to={`/friends/add`}>
                <button className="add__friend">+ Add Friend</button>
                </Link>
            </div>

            <div className="container">
                {friends.map(friend => <FriendCard key={friend.id} friend={friend} handleDelete={handleDelete} />)}
            </div>

        </div>
    )
}