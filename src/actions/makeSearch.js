export default async function makeSearch(text) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  }
  return fetch('https://text-analysis-backend.herokuapp.com/sentiment', options)
    .then(response => response.json())
    .then(data => data)
}