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

              <div><strong>Title: </strong>{article.title}</div>
              <div><strong>URL: </strong> {article.url}</div>
              <div><strong>Synopsis: </strong>{article.synopsis}</div>
              <div><strong>Posted by: </strong> {article.user.name} - {formattedDate}</div>
            
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

            <div><strong>Title: </strong>{article.title}</div>
            <div><strong>URL: </strong> {article.url}</div>
            <div><strong>Synopsis: </strong>{article.synopsis}</div>
            <div><strong>Posted by: </strong> {article.user.name} - {formattedDate}</div>
          
          </div>
        
        </div>
      )
    }

   
}

