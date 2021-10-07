const url = "http://localhost:8088"


const ArticleManager = { 

      getAllArticles: () => {
        return fetch(`${url}/articles/?_expand=user`)
        .then(res => res.json())
    },
      deleteArticle: (id) => {
        return fetch(`${url}/articles/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    addArticleAPI: (article) => {
        return fetch(`${url}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        }).then(response => response.json())
    }

}

export default ArticleManager;

