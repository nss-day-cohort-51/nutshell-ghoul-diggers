import React, {useState, useEffect } from "react";
import { getAllArticles } from "./ArticleManager";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
    const [articles, changeArticles] = useState([])

    const getArticles = () => {
        getAllArticles().then(response => {
            changeArticles(response);
        })
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className="container-cards">
        {articles.map(article => <ArticleCard key={article.id} article={article}/>)}
        </div>
    )
}