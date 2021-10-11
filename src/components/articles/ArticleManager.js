//Author: Brady Williams
//Purpose: API calls for the article section

const url = "http://localhost:8088"

export const getFriendsById = (input) => {
    return fetch(`${url}/friends/?currentUserId=${input}&_expand=user`)
        .then(res => res.json())
}

const ArticleManager = { 

      getAllArticles: () => {
        return fetch(`${url}/articles?_sort=timestamp&_order=desc&_expand=user`)
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
    },
    getFriendsById: (input) => {
        return fetch(`${url}/friends?currentUserId=${input}&_expand=user`)
            .then(res => res.json())
    }

}

export default ArticleManager;

