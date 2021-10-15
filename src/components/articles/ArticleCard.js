//Author: Brady Williams
//Purpose: Display individual articles

import { Link } from 'react-router-dom';
import {FaEdit, FaTrash } from "react-icons/fa"
import "./Article.css"

export const ArticleCard = ({article, handleDelete}) => {
    
    const loggedInUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const formatDate = (obj) => {
      const date = new Date(obj);
      const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
      return formattedDate;
    }
    
    const formatTime = (obj) => {
      const date = new Date(obj);
      const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // converts date object to a time string that displays in format 12:25"
      return formattedTime;
    }

    if(article.userId === loggedInUser){
      return (

          <div className="card__content">

            <div className="article__info">

              <div className="article__info--field"><strong>Title: </strong>{article.title}</div>

              <div className="article__info--field"><strong>URL: </strong> <a href={article.url} target="_blank" rel="noreferrer">Check it out!</a></div>

              <div className="article__info--field"><strong>Synopsis: </strong>{article.synopsis}</div>

              <div className="article__info--ield"><strong>Posted By: </strong> {article.user.name}</div>

              <div className="article__info--field"><strong>Posted On: </strong> {formatDate(article.timestamp)} at {formatTime(article.timestamp)}</div>

            </div>

            <div className="remove__item">

              <Link to={`/articles/${article.id}/edit`}><button className="button sm"><FaEdit/></button></Link>

              <button type="button" className="button sm" onClick={() => handleDelete(article.id)}><FaTrash /></button>

            </div>

          </div>
    )
    } else {
      return (
        <div className="card__content">

            <div className="article__info--friend">

            <div className="article__info__field"><strong>Title: </strong> {article.title}</div>

            <div className="article__info--field"><strong>URL: </strong> <a href={article.url} target="_blank" rel="noreferrer"> Check it out!</a></div>

            <div className="article__info__field"><strong>Synopsis: </strong> {article.synopsis}</div>

            <div className="article__info__field"><strong>Posted By: </strong> {article.user.name}</div>

            <div className="article__info__field"><strong>Posted On: </strong> {formatDate(article.timestamp)} at {formatTime(article.timestamp)}</div>

            </div>
        
        </div>
      )
    }

}

