const url = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${url}/articles/?_expand=user`)
    .then(res => res.json())
}