export const SentimentScore = ({ confidenceScores }) => {
  const getEntries = Object.entries(confidenceScores);

  // array of scores, ex: [.56, .32, .11]
  const getValues = Object.values(confidenceScores)

  return (
    <div className="score-container">
      {getEntries.map(([key, val], i) => {
        // check if the current val in loop is the highest
        const isMax = Math.max(...getValues) === val
        return (
          <div
            key={`score-${i}`}
            className={isMax ? "score max" : "score"}
          >
            <p>{val}</p>
            <span>{key}</span>
          </div>
        )
      })}
    </div>
  )
}
