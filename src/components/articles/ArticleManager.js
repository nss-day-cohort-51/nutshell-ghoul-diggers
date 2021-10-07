const url = "http://localhost:8088"


const ArticleManager = { 

      getAllArticles: () => {
        return fetch(`${url}/articles/?_sort=timestamp&_order=desc&_expand=user`)
        .then(res => res.json())
    },
    getArticleById: (input) => {
        return fetch(`${url}/articles/${input}?_expand=user`)
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
    },
    editArticle: (article) => {
        return fetch(`${url}/articles/${article.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
          }).then(data => data.json());
    }

}

export default ArticleManager;

