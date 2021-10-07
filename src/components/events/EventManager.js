const remoteURL = "http://localhost:8088"


export const addEvent = (newEvent) => {
  return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
  }).then(response => response.json())
}