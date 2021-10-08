//Author: Brady Williams
//Purpose: Display the Articles main file

import React, {useState, useEffect } from "react";
import ArticleManager from "./ArticleManager"
import { ArticleCard } from "./ArticleCard";
import { useHistory, useParams } from "react-router";

export const Articles = () => {

    const [articles, changeArticles] = useState([]);
    const [friends, changeFriend] = useState([]);
    const { articleId } = useParams();

    const history = useHistory();

    const getArticles = () => {
        ArticleManager.getAllArticles().then(response => {
            const res = response.filter(f => !friends.some(item => {
                if(item === f.userId || f.userId === parseInt(sessionStorage.getItem("nutshell_user"))){
                    console.log(f);
                    return f;
                } }));
            console.log(res)
            changeArticles(res);
        })
    }

    const handleDelete = (id) => {
        ArticleManager.deleteArticle(id)
        .then(() => ArticleManager.getAllArticles()
            .then(response => changeArticles(response)))
    }

    const getFriends = () => {
        let arrayTaco = [];
        ArticleManager.getFriendsById(parseInt(sessionStorage.getItem("nutshell_user")))
            .then(res => {
                
                // console.log(res)
                res.forEach(taco => {
                    arrayTaco.push(taco.userId)
                })
                changeFriend(arrayTaco);
                console.log(arrayTaco);
            })

    }

    useEffect(() => {
        getArticles();
        getFriends();
        console.log("articles", articles);
        console.log("friends", friends);
    }, [])

    return (
        <div className="container-cards">
        <button className="btn--add" onClick={() => history.push("/add")}>Add Article</button>
        {articles.map(article => <ArticleCard key={article.id} article={article} handleDelete={handleDelete}/>)}
        </div>
    )
}