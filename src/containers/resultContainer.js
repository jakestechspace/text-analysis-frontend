import { SentimentScore } from "../components/sentimentScore"
import { SentimentText } from "../components/sentimentText"

export default function resultContainer({ result }) {
  const { sentences } = result.documents[0]

  // make sure we have results to display
  if (sentences.length) {
    return sentences.map((sentence, i) => {
      return (
        <div key={`results-${i}`} className="results">
          <SentimentText {...sentence} />
          <SentimentScore {...sentence} />
        </div>
      )
    })
  }

  // default, display nothing
  return null
}
