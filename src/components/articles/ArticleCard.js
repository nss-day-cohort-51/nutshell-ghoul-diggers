import { Link } from "react-router-dom";
import {FaEdit, FaTrash } from "react-icons/fa"
import "./Article.css"

export const ArticleCard = ({article, handleDelete}) => {

    const date = new Date(article.timestamp);
    const formattedDate = date.toLocaleString();
    
    const loggedInUser = parseInt(sessionStorage.getItem("nutshell_user"));


    if(article.userId === loggedInUser){
      return (
          <div className="card__content">

<div className="article__info">

<div className="article__info__field"><strong>Title: </strong>{article.title}</div>

<div className="article__info__field"><strong>URL: </strong> {article.url}</div>

<div className="article__info__field"><strong>Synopsis: </strong>{article.synopsis}</div>

<div className="article__info__field"><strong>Posted By: </strong> {article.user.name}</div>

<div className="article__info__field"><strong>Posted On: </strong> {formatDate(article.timestamp)} at {formatTime(article.timestamp)}</div>

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

<div className="article__info">

<div className="article__info__field"><strong>Title: </strong>{article.title}</div>

<div className="article__info__field"><strong>URL: </strong> {article.url}</div>

<div className="article__info__field"><strong>Synopsis: </strong>{article.synopsis}</div>

<div className="article__info__field"><strong>Posted By: </strong> {article.user.name}</div>

<div className="article__info__field"><strong>Posted On: </strong> {formatDate(article.timestamp)} at {formatTime(article.timestamp)}</div>

</div>
        
        </div>
      )
    }

   
}

