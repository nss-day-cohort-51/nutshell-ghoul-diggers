import React, { useState } from "react";
import { useHistory } from "react-router";
import ArticleManager from "./ArticleManager";

export const AddArticle = () => {
    const [article, changeArticle] = useState({ userId: parseInt(sessionStorage.getItem("nutshell_user")), url: "", title: "", synopsis: "", timestamp: Date.now() });

    const history = useHistory();

    const handleChange = (e) => {
        const newArticle = { ...article }
        let selectedVal = e.target.value

        if (e.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newArticle[e.target.id] = selectedVal

        changeArticle(newArticle)
        console.log(article)
    }

    const saveArticle = (event) => {
        event.preventDefault();

        if(article.url !== "" || article.title !== "" || article.synopsis !== ""){
            ArticleManager.addArticleAPI(article).then(() => history.push("/"))
        }       
    }

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" onChange={handleChange} required className="form-control" placeholder="Insert title"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">url: </label>
                    <input type="text" id="url" onChange={handleChange} required className="form-control" placeholder="Insert url"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis: </label>
                    <input type="text" id="synopsis" onChange={handleChange} required className="form-control" placeholder="Insert synopsis"/>
                </div>
            </fieldset>
            <button className="btn-save"
                onClick={saveArticle}>
                Save Article
            </button>
            <button className="btn-cancel" onClick={() => history.push("/")}>Cancel</button>
        </form>
    )
}