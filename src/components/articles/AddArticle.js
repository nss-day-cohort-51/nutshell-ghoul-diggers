//Author: Brady Williams
//Purpose: Add articles to the database and output

import React, { useState } from "react";
import { useHistory } from "react-router";
import ArticleManager from "./ArticleManager";

export const AddArticle = () => {
    const [article, changeArticle] = useState({ userId: parseInt(sessionStorage.getItem("nutshell_user")), url: "", title: "", synopsis: "", timestamp: Date.now() });

    const history = useHistory();

    const ResetForm = () => {
        changeArticle({
            userId: parseInt(sessionStorage.getItem("nutshell_user")),
            url: "",
            title: "",
            synopsis: "",
            timestamp: Date.now()
        });
        console.log("resetForm invoked")
      }

    const handleChange = (e) => {
        const newArticle = { ...article }
        let selectedVal = e.target.value

        if (e.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newArticle[e.target.id] = selectedVal

        changeArticle(newArticle)
    }

    const saveArticle = (event) => {
        event.preventDefault();

        if(article.url !== "" || article.title !== "" || article.synopsis !== ""){
            ArticleManager.addArticleAPI(article).then(() => history.push("/"))
        }       
    }

    return (
        <div className="form__flex">
            <form>
                <div className="form__title">Add New Article</div>
                <fieldset>
                    <div className="form__group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" onChange={handleChange} required className="form__group--edit" placeholder="Insert title"/>
                    </div>

                    <div className="form__group">
                        <label htmlFor="url">url: </label>
                        <input type="text" id="url" onChange={handleChange} required className="form__group--edit" placeholder="Insert url"/>
                    </div>

                    <div className="form__group">
                        <label htmlFor="synopsis">Synopsis: </label>
                        <input type="text" id="synopsis" onChange={handleChange} required className="form__group--edit" placeholder="Insert synopsis"/>
                    </div>
                </fieldset>

                <div className="form__btns">
                    <button className="form__btn"
                        onClick={saveArticle}>
                        Submit
                    </button>

                    <button className="form__btn" onClick={ResetForm}>Reset Form</button>

                    <button className="form__btn" onClick={() => history.push("/articles")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}