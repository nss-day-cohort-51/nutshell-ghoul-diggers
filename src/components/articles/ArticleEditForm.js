import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import ArticleManager from "./ArticleManager";

export const ArticleEditForm = () => {
    const [articles, changeArticles] = useState({
    userId: parseInt(sessionStorage.getItem("nutshell_user")),
    synopsis: "",
    timestamp: Date.now(),
    title: "",
    url: "",
    });

    const { articleId } = useParams();

    const history = useHistory();

    const handleEdit = evt => {
        evt.preventDefault()

        // This is an edit, so we need the id
        const editedArticle = {
            id: articleId,
            userId: articles.userId,
            title: articles.title,
            url: articles.url,
            synopsis: articles.synopsis,
            timestamp: articles.timestamp
        };

        ArticleManager.editArticle(editedArticle)
            .then(() => history.push("/")
            )
    }

    const handleChange = evt => {
        const stateToChange = { ...articles };
        stateToChange[evt.target.id] = evt.target.value;
        changeArticles(stateToChange);
    }

    useEffect(() => {
        console.log(articleId)
        ArticleManager.getArticleById(articleId)
            .then(article => {
                console.log(article)
                changeArticles(article);
            });
    }, []);

    return (
        <form className="customerForm">
        <h2 className="customerForm__title">New Article</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" onChange={handleChange} required className="form-control" placeholder="Insert title" value={articles.title}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="url">url: </label>
                <input type="text" id="url" onChange={handleChange} required className="form-control" placeholder="Insert url" value={articles.url}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="synopsis">Synopsis: </label>
                <input type="text" id="synopsis" onChange={handleChange} required className="form-control" placeholder="Insert synopsis" value={articles.synopsis}/>
            </div>
        </fieldset>
        <button className="btn-save"
            onClick={handleEdit}>
            Save Article
        </button>
        <button className="btn-cancel" onClick={() => history.push("/")}>Cancel</button>
    </form>
    )
}