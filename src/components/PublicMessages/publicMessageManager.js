const api = "http://localhost:8088";

//get message by Id
export const messagById = (messageInput) =>
{
  return fetch(`${api}/messages/${messageInput}`)
  .then(response => response.json())
}


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

//edit

export const editMessages = messageId =>
{
  return fetch(`${api}/messages/${messageId.id}`,{
    method:"PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(messageId)
  })
  .then(response => response.json())
}