import React, {useState, useEffect } from "react";
import ArticleManager from "./ArticleManager"
import { ArticleCard } from "./ArticleCard";
import { useHistory } from "react-router";

export const Articles = () => {

    const [articles, changeArticles] = useState([])

    const history = useHistory();

    const getArticles = () => {
        ArticleManager.getAllArticles().then(response => {
            changeArticles(response);
        })
    }

    const handleDelete = (id) => {
        ArticleManager.deleteArticle(id)
        .then(() => ArticleManager.getAllArticles()
            .then(response => changeArticles(response)))
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className="container-cards">
        <button className="btn--add" onClick={() => history.push("/add")}>Add Article</button>
        {articles.map(article => <ArticleCard key={article.id} article={article} handleDelete={handleDelete}/>)}
        </div>
    )
}