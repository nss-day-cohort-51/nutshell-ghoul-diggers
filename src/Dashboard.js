import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleManager from "../src/components/articles/ArticleManager";
import { getAllFriends } from "../src/components/friends/FriendManager";
import { getAllTasks } from "../src/components/tasks/TaskManager";
import { getAllEvents } from "../src/components/events/EventManager";
import { getUserById } from "../src/components/users/UserManager";

import "./index.css"

export const Dashboard = () => {
  const [ articleNums, setArticleNums ] = useState(0);
  const [ friendNums, setFriendNums ] = useState(0);
  const [ taskNums, setTaskNums ] = useState(0);
  const [ eventNums, setEventNums ] = useState(0);
  const [ loggedUserId, setLoggedUserId ] =  useState(0);

  const userId = sessionStorage.getItem("nutshell_user");

  const showArticlesDash = () => {
    ArticleManager.getAllArticles()
    .then( numOfArticles => setArticleNums(numOfArticles.length))
  }

  const showFriendsDash = () => {
    getAllFriends()
    .then( numOfFriends => setFriendNums(numOfFriends.length))
  }

  const showTasksDash = () => {
    getAllTasks()
    .then( numOfTasks => setTaskNums(numOfTasks.length))
  }

  const showEventsDash = () => {
    getAllEvents()
    .then( numOfEvents => setEventNums(numOfEvents.length))
  }

  useEffect(() => {
    showArticlesDash();
    showFriendsDash();
    showTasksDash();
    showEventsDash();
    getUserById(userId).then(loggedUserId => setLoggedUserId(loggedUserId))  
}, [])

return (
    <>
    <div className="dashboard">

      <div className="dashboard__title">Dashboard</div>
      <div className="dashboard__subtitle">Welcome {loggedUserId.name}</div>


        <div className="row1">

        <Link to="/articles">
          <div className="r1col">
            <div className="category">Number of Articles:</div>
            <div className="nums">{articleNums}</div>
          </div>
        </Link>

        <Link to="/friends">
          <div className="r1col">
            <div className="category">Number of Friends:</div>
            <div className="nums">{friendNums}</div>
          </div>
        </Link>

        </div>

        <div className="row2">

        <Link to="/tasks">
          <div className="r2col">
            <div className="category">Number of Tasks:</div>
            <div className="nums">{taskNums}</div>
          </div>
          </Link>

        <Link to="/events">
          <div className="r2col">            
            <div className="category">Number of Events:</div>
            <div className="nums">{eventNums}</div>
          </div>
          </Link>

        </div>

    </div>
    </>
  )
}