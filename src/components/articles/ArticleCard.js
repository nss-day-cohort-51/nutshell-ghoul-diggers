//Author: Brady Williams
//Purpose: Display individual articles

import { useHistory } from "react-router";

export const ArticleCard = ({article, handleDelete}) => {

    const date = new Date(article.timestamp);
    const history = useHistory();
    const formattedDate = date.toLocaleString();
    
    const loggedInUser = parseInt(sessionStorage.getItem("nutshell_user"));


    if(article.userId === loggedInUser){
      return(
        <div className="card">
       <div className="card-content">
         <h3>Title: <span>
         {article.title}
         </span></h3>
         <p>url: {article.url}</p>
         <p>synopsis: {article.synopsis}</p>
         <p>Posted by {article.user.name} - {formattedDate}</p>
       </div>
       <button className="btn--delete" onClick={() => handleDelete(article.id)}>Delete</button>
       <button className="btn--edit" onClick={() => history.push(`/${article.id}/edit`)}>Edit</button>
     </div>
         
     )
    }else {
      return(
        <div className="card">
       <div className="card-content">
         <h3>Title: <span>
         {article.title}
         </span></h3>
         <p>url: {article.url}</p>
         <p>synopsis: {article.synopsis}</p>
         <p>Posted by {article.user.name} - {formattedDate}</p>
       </div>
     </div>
         
     )
    }

   
}