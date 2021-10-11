import React, {useState, useEffect } from "react";
import ArticleManager from "./ArticleManager"
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import "./Article.css"

export const Articles = () => {

    const [articles, changeArticles] = useState([]);

    const { articleId } = useParams();


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
        <div className="section">

            <div className="section__header">
            Articles
            </div> 

            <div className="section__content">
                <Link to={`articles/add`}>
                <button className="add__article">+ Add An Article</button></Link>
            </div>

            <div className="container">
                {articles.map(article => <ArticleCard key={article.id} article={article} handleDelete={handleDelete}/>)}
            </div>

        </div>
    )
}