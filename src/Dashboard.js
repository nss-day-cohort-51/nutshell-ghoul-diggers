import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleManager from "../src/components/articles/ArticleManager";
import { getAllFriends } from "../src/components/friends/FriendManager";
import { getAllTasks } from "../src/components/tasks/TaskManager";
import { getAllEvents } from "../src/components/events/EventManager";
import "./index.css"

export const Dashboard = () => {
  const [ articleNums, setArticleNums ] = useState(0);
  const [ friendNums, setFriendNums ] = useState(0);
  const [ taskNums, setTaskNums ] = useState(0);
  const [ eventNums, setEventNums ] = useState(0);

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
    
}, [])

return (
    <>
    <div className="dashboard">

      <div className="dashboard__title">Dashboard</div>

        <div className="row1">

        <Link to="/articles">
          <div className="r1col">
            <p className="category">Number of Articles:</p>
            <p className="nums">{articleNums}</p>
          </div>
        </Link>

        <Link to="/friends">
          <div className="r1col">
            <p className="category">Number of Friends:</p>
            <p className="nums">{friendNums}</p>
          </div>
        </Link>

        </div>

        <div className="row2">

        <Link to="/tasks">
          <div className="r2col">
            <p className="category">Number of Tasks:</p>
            <p className="nums">{taskNums}</p>
          </div>
          </Link>

        <Link to="/events">
          <div className="r2col">            
            <p className="category">Number of Events:</p>
            <p className="nums">{eventNums}</p>
          </div>
          </Link>

        </div>

    </div>
    </>
  )
}