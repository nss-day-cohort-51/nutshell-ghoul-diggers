//Author: Brady Williams
//Purpose: Display individual articles

import { useHistory } from "react-router";
import "./ArticleCardDesign.css"

export const ArticleCard = ({article, handleDelete}) => {

    const date = new Date(article.timestamp);
    const formattedDate = date.toLocaleString();
    
    const loggedInUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const history = useHistory();

    if(article.userId === loggedInUser){
      return(
        <div className="card">
       <div className="card-content">
         <h3>Title: <span>
         {article.title}
         </span></h3>
         <a href={article.url} target="_blank">Check it out!</a>
         <p>synopsis: {article.synopsis}</p>
         <p>Posted by {article.user.name} - {formattedDate}</p>
       </div>
       <button className="btn--delete" onClick={() => handleDelete(article.id)}>Delete</button>
       <button className="btn--edit" onClick={() => history.push(`/${article.id}/edit`)}>Edit</button>
     </div>
         
     )
    }else {
      return(
        <div className="card-friend">
       <div className="card-friend-content">
         <h3 className="task-italic">Title: <span>
         {article.title}
         </span></h3>
         <a href={article.url} target="_blank">Check it out!</a>
         <p className="p-italic">synopsis: {article.synopsis}</p>
         <p className="p-italic">Posted by {article.user.name} - {formattedDate}</p>
       </div>
     </div>
         
     )
    }

   
}