//Author: Brady Williams
//Purpose: Add articles to the database and output

import React, { useState } from "react";
import { useHistory } from "react-router";
import ArticleManager from "./ArticleManager";
import "./Article.css"

export const ArticleForm = () => {
    const [article, changeArticle] = useState({ userId: parseInt(sessionStorage.getItem("nutshell_user")), url: "", title: "", synopsis: "", timestamp: Date.now() });
    const [conflictDialog, setConflictDialog] = useState(false);

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

        if (article.url !== "" || article.title !== "" || article.synopsis !== "") {
            ArticleManager.addArticleAPI(article).then(() => history.push("/articles"))
        } else {
            setConflictDialog(true)
        }
    }

    return (
        <div className="form__flex">

            <dialog className="dialog" open={conflictDialog}>
                <h2>Please Fill In All Fields</h2>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form>
                <div className="form__title">Add New Article</div>
                <fieldset>
                    <div className="form__group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" onChange={handleChange} required className="form__group--edit" placeholder="Insert title" />
                    </div>

                    <div className="form__group">
                        <label htmlFor="url">URL: </label>
                        <input type="text" id="url" onChange={handleChange} required className="form__group--edit" placeholder="Insert URL"/>
                    </div>

                    <div className="form__group">
                        <label htmlFor="synopsis">Synopsis: </label>
                        <input type="text" id="synopsis" onChange={handleChange} required className="form__group--edit" placeholder="Insert synopsis" />
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