export const SentimentScore = ({ confidenceScores }) => {
  const getEntries = Object.entries(confidenceScores);

  return (
    <div className="score-container">
      {getEntries.map(([key, val], i) => {
        return (
          <div key={`score-${i}`} className="score">
            <p>{val}</p>
            <span>{key}</span>
          </div>
        )
      })}
    </div>
  )
}
