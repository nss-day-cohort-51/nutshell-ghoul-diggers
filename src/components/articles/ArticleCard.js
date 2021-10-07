
export const ArticleCard = ({article, handleDelete}) => {

    return(
        <div className="card">
        <div className="card-content">
          <h3>User: <span>
            {article.user.name}
          </span></h3>
          <p>url: {article.url}</p>
          <p>title: {article.title}</p>
          <p>synopsis: {article.synopsis}</p>
          <p>time: {article.timestamp}</p>
        </div>
        <button className="btn--delete" onClick={() => handleDelete(article.id)}>Delete</button>
      </div>
    )
}