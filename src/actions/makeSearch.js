export default async function makeSearch(text, setLoading) {
  // loading on
  setLoading(true)

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  }

  // here is the fetch request that returns data from the back end
  return fetch('https://text-analysis-backend.herokuapp.com/sentiment', options)
    .then(response => response.json())
    .then(data => {
      // loading off
      setLoading(false)
      return data
    })
}