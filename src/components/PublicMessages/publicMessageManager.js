const api = "http://localhost:8088";

export const getPublicMessages = () => {
  return fetch(`${api}/messages`).then((response) => response.json());
};

export const addPublicMessages = (newMessages) => {
  return fetch(`${api}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessages),
  }).then((response) => response.json());
};

//delete

export const deleteMessages = (messageId) =>
{
  return fetch(`${api}/messages/${messageId}`,{method:"DELETE"})
  .then(response => response.json())
}
