//Author: Brady Williams
//Purpose: Edit article and update the database and dom

import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import ArticleManager from "./ArticleManager";
import "./Article.css"

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
            .then(() => history.push("/articles")
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
        <div className="form__flex">
        <form>
            <div className="form__title">Edit Article</div>
            <fieldset>

                <div className="form__group">

                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" onChange={handleChange} required className="form__group--edit" placeholder="Insert title" value={articles.title}/>
   
                    <label htmlFor="url">URL: </label>
                    <input type="text" id="url" onChange={handleChange} required className="form__group--edit" placeholder="Insert url" value={articles.url}/>

                    <label htmlFor="synopsis">Synopsis: </label>
                    <input type="text" id="synopsis" onChange={handleChange} required className="form__group--edit" placeholder="Insert synopsis" value={articles.synopsis}/>

                    <input type="hidden" id="timestamp" className="form__group--edit" value={Date.now()}/>

                </div>

            </fieldset>

            <div className="form__btns">
                <button className="form__btn"
                    onClick={handleEdit}>
                    Submit
                </button>
                
                <button className="form__btn" onClick={() => history.push("/articles")}>Cancel</button>
            </div>
            
        </form>
    </div>
    )
}